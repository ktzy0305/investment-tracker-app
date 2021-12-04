<template>
  <form class="container" @submit.prevent>
    <div class="row mb-3">
      <div class="btn-group" role="group" aria-label="Transaction Action">
        <input
          type="radio"
          class="btn-check"
          name="btnAction"
          id="btnBuy"
          value="buy"
          v-model="action"
          autocomplete="off"
          checked
        />
        <label class="btn btn-outline-primary" for="btnBuy">Buy</label>
        <input
          type="radio"
          class="btn-check"
          name="btnAction"
          id="btnSell"
          value="sell"
          v-model="action"
          autocomplete="off"
        />
        <label class="btn btn-outline-primary" for="btnSell">Sell</label>
      </div>
    </div>
    <div class="row mb-3">
      <div class="col-12">
        <label class="form-label">Asset</label>
        <input
          type="text"
          class="form-control"
          placeholder="Enter Asset Name"
          id="assetName"
          v-model="asset"
        />
        <div class="invalid-feedback" id="assetError" hidden>
        </div>
      </div>
    </div>
    <div class="row mb-3">
      <div class="col-6">
        <label class="form-label">Quantity</label>
        <input type="number" id="quantity" class="form-control" placeholder="0.00" v-model="quantity" />
        <div class="invalid-feedback" id="quantityError" hidden>
        </div>
      </div>
      <div class="col-6">
        <label class="form-label">Price Per Unit</label>
        <div class="input-group" id="pricePerUnitGroup">
            <span class="input-group-text">$</span>
            <input type="number" id="pricePerUnit" class="form-control" placeholder="1.00" step="0.01" v-model="pricePerUnit" />
        </div>
        <div class="invalid-feedback" id="pricePerUnitError" hidden>
        </div>
      </div>
    </div>
    <!-- <div class="row mb-3">
      <div class="col-12">
        <label class="form-label">Date & Time</label>
        <input class="form-control" type="datetime-local" v-model="transactionDate">
      </div>
    </div> -->
    <div class="row mb-3">
      <div class="col-12">
        <a class="btn btn-grey me-2">Fees</a>
        <a class="btn btn-grey">Notes</a>
      </div>
    </div>
    <div class="row-mb-3 pb-3">
      <div class="col-12">
        <div class="card border-transparent">
          <div class="card-body bg-grey">
            <div>Total Spent</div>
            <h4 class="fw-bolder">$ {{ totalSpent }}</h4>
          </div>
        </div>
      </div>
    </div>
    <div class="row mb-3">
      <div class="col-12">
        <button type="button" class="btn btn-primary w-100" @click="addTransaction()">
          Add Transaction
        </button>
      </div>
    </div>
  </form>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    data() {
        return {
            action: 'buy',
            asset: '',
            quantity: '',
            pricePerUnit: '',
            notes: '',
            transactionDate: '',
            fees: 0,
        };
    },

    computed: {
        totalSpent: function() {
            var totalSpent = this.quantity * this.pricePerUnit + this.fees;
            return totalSpent.toFixed(2);
        },
    },

    methods: {
        ...mapActions([
            'addTransaction',
        ]),

        addTransaction: function() {
            if (this.checkForm()){
              console.log('addTransaction');
              const new_transaction = {
                action: this.action,
                asset: this.asset,
                quantity: this.quantity,
                price_per_unit: this.pricePerUnit,
                fees: this.fees,
                transaction_date: this.transactionDate,
                notes: this.notes,
              };
              this.addTransaction(new_transaction);
            }
        },

        checkAssetName: function() {
            var assetName = document.getElementById('assetName');
            var assetError = document.getElementById('assetError');
            if (this.asset === '') {
                console.log(assetName);
                assetName.classList.add('is-invalid');
                assetError.innerHTML = 'Please enter an asset name';
                assetError.hidden = false;
                return false;
            }
            else{
                assetName.classList.remove('is-invalid');
                assetError.innerHTML = '';
                assetError.hidden = true;
                return true;
            }
        },

        checkQuantity: function() {
            var quantity = document.getElementById('quantity');
            var quantityError = document.getElementById('quantityError');
            if (this.quantity === '') {
                quantity.classList.add('is-invalid');
                quantityError.innerHTML = 'Please enter a quantity';
                quantityError.hidden = false;
                return false;
            }
            else if(this.quantity <= 0){
                quantity.classList.add('is-invalid');
                quantityError.innerHTML = 'Quantity must be greater than 0';
                quantityError.hidden = false;
                return false;
            }
            else{
                quantity.classList.remove('is-invalid');
                quantityError.innerHTML = '';
                quantityError.hidden = true;
                return true;
            }
        },
        checkPricePerUnit: function() {
            var pricePerUnit = document.getElementById('pricePerUnit');
            var pricePerUnitGroup = document.getElementById('pricePerUnitGroup');
            var pricePerUnitError = document.getElementById('pricePerUnitError');
            if (this.pricePerUnit === '') {
                pricePerUnit.classList.add('is-invalid');
                pricePerUnitGroup.classList.add('is-invalid');
                pricePerUnitError.innerHTML = 'Please enter a price';
                pricePerUnitError.hidden = false;
                return false;
            }
            else if(this.pricePerUnit <= 0){
                pricePerUnit.classList.add('is-invalid');
                pricePerUnitGroup.classList.add('is-invalid');
                pricePerUnitError.innerHTML = 'Price must be greater than $0';
                pricePerUnitError.hidden = false;
                return false;
            }
            else{
                pricePerUnit.classList.remove('is-invalid');
                pricePerUnitGroup.classList.remove('is-invalid');
                pricePerUnitError.innerHTML = '';
                pricePerUnitError.hidden = true;
                return true;
            }
        },

        checkForm: function() {
          return this.checkAssetName() && this.checkQuantity() && this.checkPricePerUnit();
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
</style>