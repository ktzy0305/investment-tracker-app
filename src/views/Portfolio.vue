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
                  <div class="h5">$1912.02 (24h)</div>
                </div>
                <div class="col">
                  <h4><span class="badge bg-success">+5.26%</span></h4>
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
                <th>Price</th>
                <th>Holdings</th>
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
                <td>
                  <div>${{ asset.holdings.toFixed(2) }}</div>
                  <div>{{ asset.quantity }} Unit(s)</div>
                </td>
              </tr>
              <!-- <tr>
                <td>Apple (AAPL)</td>
                <td>$152.11</td>
                <td>
                  <div>$24338.45</div>
                  <div>160 Unit(s)</div>
                </td>
              </tr>
              <tr>
                <td>Ethereum</td>
                <td>$3982.42</td>
                <td>
                  <div>$9941.06</div>
                  <div>2 ETH</div>
                </td>
              </tr>
              <tr>
                <td>Invesco QQQ Trust Series</td>
                <td>$398.67</td>
                <td>
                  <div>$3986.70</div>
                  <div>10 Unit(s)</div>
                </td>
              </tr> -->
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

export default {
  components: {
    TransactionForm,
  },
  data() {
    return {
      showTransactionForm: false,
    };
  },
  computed: {
    ...mapGetters('portfolio', [
      'getTransactions',
    ]),

    assets(){
      var transactions = this.getTransactions;
      // const assets = [...new Set(transactions.map(transaction => transaction.asset))];
      var assets = [];
      transactions.forEach(element => {
        if (assets.map(asset => asset.asset).indexOf(element.asset) === -1) {
          assets.push({
            asset: element.asset,
            price_per_unit: element.price_per_unit,
            quantity: element.quantity,
            holdings: (element.price_per_unit * element.quantity),
          });
        }
        else{
          assets.forEach(asset => {
            if(asset.asset === element.asset){
              asset.price_per_unit = ((asset.price_per_unit * asset.quantity) + (element.price_per_unit * element.quantity)) / (asset.quantity + element.quantity);
              if (element.action === 'BUY') {
                asset.quantity += element.quantity;
                asset.holdings = asset.holdings + (element.price_per_unit * element.quantity);
              }
              else if (element.action === 'SELL') {
                asset.quantity -= element.quantity;
                asset.holdings = asset.quantity * asset.price_per_unit;
              }
            }
          });
        }
      });
      // console.log(assets)
      // console.log(transactions);
      return assets;
    },

    totalValue(){
      return this.assets.reduce((total, asset) => {
        return total + (asset.holdings);
      }, 0);
    },
  },

  methods: {
    ...mapActions('portfolio', [
      'getAllTransactions',
      'getUserTransactions',
    ]),

    toggleTransactionForm() {
      this.showTransactionForm = !this.showTransactionForm;
    },
  },


  beforeMount() {
    this.getUserTransactions();
  },

  mounted() {
    this.assets;
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