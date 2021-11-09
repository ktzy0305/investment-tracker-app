<template>
  <div class="container">
      <div class="row mt-4">
            <div class="col-lg-6 col-md-8 col-sm-10 col-12 offset-lg-3 offset-md-2 offset-sm-1">
                <div class="card">
                    <div class="card-header">
                        <h4>P2P</h4>
                    </div>
                    <div class="card-body">
                        <div class="row mb-3">
                            <div class="col-md-12">
                                <div class="form-group">
                                    <label for="">Amount</label>
                                    <input type="text" class="form-control" v-model="amount">
                                </div>
                            </div>
                        </div>
                        <div class="row mb-3">
                            <div class="col-md-12">
                                <div class="form-group">
                                    <label for="">Receiver</label>
                                    <input type="text" class="form-control" v-model="receiver">
                                </div>
                            </div>
                        </div>
                        <div class="row mb-3">
                            <div class="col-md-12">
                                <div class="form-group">
                                    <label for="">Message</label>
                                    <input type="text" class="form-control" v-model="message">
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <button class="btn btn-primary" @click="send">Send</button>
                            </div>
                        </div>
                    </div>
                </div>
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