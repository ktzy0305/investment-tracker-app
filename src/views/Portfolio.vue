<template>
  <!-- Stock Portfolio -->
  <div class="user-portfolio">
    <div class="container">
      <div class="row mt-4">
        <div class="col-lg-12">
          <div class="card">
            <div class="card-body bg-grey">
              <div class="row">
                <div class="col-sm-10 col-9">
                  <div class="h4">Current Value</div>
                  <div class="h2 fw-bolder">${{ totalValue.toFixed(2) }}</div>
                  <div class="h5">
                    <div v-if="totalCurrentValue > totalValue">
                      <span class="text-success">+${{ (totalCurrentValue - totalValue).toFixed(2) }}</span>
                    </div>
                    <div v-else-if="totalCurrentValue < totalValue">
                      <span class="text-danger">-${{ Math.abs(totalCurrentValue - totalValue).toFixed(2) }}</span>
                    </div>
                    <div v-else>
                      <span class="text-muted">${{ (totalCurrentValue - totalValue).toFixed(2) }}</span>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <h4>
                    <div v-if="((totalCurrentValue-totalValue)/totalValue)*100 > 0">
                      <span class="badge bg-success">+{{(((totalCurrentValue-totalValue)/totalValue)*100).toFixed(2)}}%</span>
                    </div>
                    <div v-else-if="((totalCurrentValue-totalValue)/totalValue)*100 < 0">
                      <span class="badge bg-danger">{{(((totalCurrentValue-totalValue)/totalValue)*100).toFixed(2)}}%</span>
                    </div>
                    <div v-else>
                      <span class="badge bg-muted">{{(((totalCurrentValue-totalValue)/totalValue)*100).toFixed(2)}}%</span>
                    </div>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-lg-12">
          <a class="btn btn-primary float-end" data-bs-toggle="modal" data-bs-target="#addAssetModal">Add New</a>
        </div>
      </div>
      <div class="row mt-2">
        <div class="col-lg-12">
          <table class="table table-responsive table-striped">
            <thead>
              <tr>
                <th>Asset</th>
                <th>Cost Price</th>
                <th>Current Price</th>
                <th>Holdings</th>
                <th>PNL</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="asset in assets" v-bind:key="asset._id">
                <td>
                  <div class="row">
                    <div class="col-sm-2 col-2">
                      <img class="img-fluid" src="https://via.placeholder.com/100x100" alt="">
                    </div>
                    <div class="col-sm-10 col-10">
                      <div class="h5">{{ asset.asset }}</div>
                    </div>
                  </div>
                </td>
                <td>${{ asset.price_per_unit.toFixed(2) }}</td>
                <td>${{ asset.current_price }}</td>
                <td>
                  <div>${{ asset.holdings.toFixed(2) }}</div>
                  <div>{{ asset.quantity }} Unit(s)</div>
                </td>
                <td>
                  <div v-if="((asset.current_price*asset.quantity) - asset.holdings) > 0">
                    <span class="text-success">+${{ ((asset.current_price*asset.quantity) - asset.holdings).toFixed(2) }}</span>
                  </div>
                  <div v-else-if="((asset.current_price*asset.quantity) - asset.holdings) < 0">
                    <span class="text-danger">-${{ Math.abs((asset.current_price*asset.quantity) - asset.holdings).toFixed(2) }}</span>
                  </div>
                  <div v-else>
                    <span class="text-grey">$0.00</span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <!-- Modal -->
    <div class="modal fade" id="addAssetModal" tabindex="-1" aria-labelledby="addAssetModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title fw-bolder" id="addAssetModalLabel">Add Transaction</h4>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <TransactionForm></TransactionForm>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TransactionForm from '../components/TransactionForm.vue';
import { mapActions, mapGetters } from 'vuex';
const yahooFinance = require("yahoo-finance");

export default {
  components: {
    TransactionForm,
  },
  data() {
    return {
      assets: [],
      showTransactionForm: false,
    };
  },
  computed: {
    ...mapGetters('portfolio', [
      'getTransactions',
    ]),

    totalValue(){
      return this.assets.reduce((total, asset) => {
        return total + (asset.holdings);
      }, 0);
    },

    totalCurrentValue(){
      return this.assets.reduce((total, asset) => {
        return total + (asset.current_price * asset.quantity);
      }, 0);
    },
    
  },

  methods: {
    ...mapActions('portfolio', [
      'getAllTransactions',
      'getUserTransactions',
    ]),

    calculateAssets(){
      console.log("running calculateAssets");
      var transactions = this.getTransactions;
      // const assets = [...new Set(transactions.map(transaction => transaction.asset))];    
      transactions.forEach(element => {
        if (this.assets.map(asset => asset.asset).indexOf(element.asset) === -1) {
          let new_asset = {
            asset: element.asset,
            price_per_unit: element.price_per_unit,
            current_price: 0,
            holdings: (element.price_per_unit * element.quantity),
            quantity: element.quantity,
          };
          yahooFinance.quote({
            symbol: element.asset,
            modules: ['price'],
          }).then(quote => {
            console.log(quote.price.regularMarketPrice);
            new_asset.current_price = quote.price.regularMarketPrice;
          });
          console.log(new_asset);
          this.assets.push(new_asset);
        }
        else{
          this.assets.forEach(asset => {
            if(asset.asset === element.asset){
              if (element.action === 'BUY') {
                asset.price_per_unit = ((asset.price_per_unit * asset.quantity) + (element.price_per_unit * element.quantity)) / (asset.quantity + element.quantity);
                asset.quantity += element.quantity;
                asset.holdings = asset.holdings + (element.price_per_unit * element.quantity);
              }
              else if (element.action === 'SELL') {
                asset.price_per_unit = ((asset.price_per_unit * asset.quantity) - (element.price_per_unit * element.quantity)) / (asset.quantity - element.quantity);
                asset.quantity -= element.quantity;
                asset.holdings = (asset.quantity * asset.price_per_unit);
              }
            }
          });
        }
      });
    },

    toggleTransactionForm() {
      this.showTransactionForm = !this.showTransactionForm;
    },
  },

  beforeMount() {
    this.getUserTransactions().then(()=>{
      console.log("Complete")
      this.calculateAssets();
    });
  },

  mounted() {
  },

};


</script>

<style scoped>
.bg-grey{
  background-color: #f5f5f5;
}


.border-transparent{
  border: transparent;
}

.btn-grey{
  background-color: #f5f5f5;
  color: #6c757d;
}

.card{
  border: transparent !important;
}

.modal-header{
  border-bottom: none;
}
</style>