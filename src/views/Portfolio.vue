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
                  <div class="h2 fw-bolder">$38,266.22</div>
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
              <tr>
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

export default {
  components: {
    TransactionForm,
  },
  data() {
    return {
      showTransactionForm: false,
    };
  },
  methods: {
    toggleTransactionForm() {
      this.showTransactionForm = !this.showTransactionForm;
    },
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