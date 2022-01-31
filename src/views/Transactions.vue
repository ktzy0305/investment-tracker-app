<template>
    <div class="transactions">
        <div class="container">
            <div class="row mt-4">
                <div class="card">
                    <div class="card-body bg-grey">
                        <div class="row">
                            <div class="col-sm-10 col-9">
                            <div class="h4">Total Profit Value</div>
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
            <div class="row mt-3">
                <div class="col-12">
                    <h1>Transaction History</h1>
                </div>
            </div>
            <div class="row mt-3">
                <div class="col-lg-12">
                    <table class="table table-responsive table-striped">
                        <thead>
                            <tr>
                                <th>Asset</th>
                                <th>Action</th>
                                <th>Value</th>
                                <th>Holdings</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="transaction in transactions" v-bind:key="transaction._id">
                                <td>
                                    <div class="row">
                                        <div class="col-sm-2 col-2">
                                            <img class="img-fluid" src="https://via.placeholder.com/100x100" alt="">
                                        </div>
                                        <div class="col-sm-10 col-10">
                                            <div class="h5">{{ transaction.asset }}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div class="h6 text-green fw-bolder" v-if="transaction.action === 'BUY'">{{ transaction.action }}</div>
                                    <div class="h6 text-red fw-bolder" v-else>{{ transaction.action }}</div>
                                </td>
                                <td>${{ transaction.price_per_unit.toFixed(2) }}</td>
                                <td>
                                    <div>${{ (transaction.price_per_unit * transaction.quantity).toFixed(2) }}</div>
                                    <div>{{ transaction.quantity }} Unit(s)</div>
                                </td>
                                <td>
                                    <div>{{ formatDate(transaction.transaction_date) }}</div>
                                    <div>{{ formatTime(transaction.transaction_date) }}</div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import moment from 'moment';

export default {
  computed: {
    ...mapGetters('portfolio', [
        'getTransactions',
    ]),

    transactions() {
        return this.getTransactions;
    },

    totalValue(){
        var transactions = this.getTransactions;
        var assets = []
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
                assets.forEach(asset =>{
                    if(element.asset === asset.asset){
                        asset.price_per_unit = ((asset.price_per_unit * asset.quantity) + (element.price_per_unit * element.quantity)) / (asset.quantity + element.quantity);
                        if (element.action === 'BUY') {
                            asset.quantity += element.quantity;
                            asset.holdings = asset.holdings + (element.price_per_unit * element.quantity);
                        }
                        else if (element.action === 'SELL') {
                            asset.quantity -= element.quantity;
                            asset.holdings -= element.quantity * (element.price_per_unit - asset.price_per_unit);
                        }
                    }
                })
            }
        });
        // Sum of all assets
        var total = assets.reduce((acc, asset) => {
            return acc + asset.holdings;
        }, 0);
        return total;
    },
  },

  methods: {
    ...mapActions('portfolio', [
        'getAllTransactions',
        'getUserTransactions',
    ]),

    formatDate(date) {
        return moment(date).format('DD-MM-YYYY');
    },

    formatTime(date){
        return moment(date).format('hh:mm:ss'); 
    },

    toggleTransactionForm() {
        this.showTransactionForm = !this.showTransactionForm;
    },
  },


  beforeMount() {
        this.getUserTransactions();
  },
}
</script>

<style scoped>
    .text-green {
        color: green;
    }

    .text-red {
        color: red;
    }

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

</style>