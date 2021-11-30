<template>
  <!-- Stock Portfolio -->
  <div class="container user-portfolio">
    <div class="row mt-4">
      <div class="col-lg-12">
        <div class="card">
          <div class="card-header">
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
        <a class="btn btn-primary float-end">Add New Asset</a>
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
</template>

<script>
export default {

}
</script>

<style>

</style>