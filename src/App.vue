<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div class="container">
      <div class="row">
        <div class="listing col-lg-3 col-md-4 mb-3 d-flex align-items-stretch" v-for="listing in listings" v-bind:key="listing.symbol">
          <Listing v-bind:listing="listing" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Listing from "./components/Listing.vue";
// var yahooFinance = require('yahoo-finance');


// function getListings(){
//   var httpRequestOptions = {
//     proxy: 'http://localhost:8081'
//   };

//   yahooFinance.quote({
//     symbol: "AAPL,GOOG,MSFT,AMZN,FB,TWTR,NFLX,TSLA,BABA,BA",
//     modules: ["price"]
//   },httpRequestOptions, function(err, quotes){
//     if(err){
//       console.log(err);
//     }
//     else{
//       return quotes;
//     }
//   });
// }

// console.log(getListings())

export default {
  name: "App",
  components: {
    // HelloWorld,
    Listing,
  },
  methods(){
    return {
      // getListings: function(){
      //   var self = this;
      //   yahooFinance.quote({
      //     symbol: "AAPL,GOOG,MSFT,AMZN,FB,TWTR,NFLX,TSLA,BABA,BA",
      //     modules: ["price"]
      //   }, function(err, quotes){
      //     if(err){
      //       console.log(err);
      //     }
      //     else{
      //       self.listings = quotes;
      //       return quotes;
      //     }
      //   });
      // }
    }
  },
  data() {
    return {
      listings: [
        {
          symbol: "AAPL",
          name: "Apple Inc.",
          price: 151.98,
        },
        {
          symbol: "TSLA",
          name: "Tesla, Inc.",
          price: 1229.91,
        },
        {
          symbol: "FB",
          name: "Meta Platforms, Inc.",
          price: 335.85,
        },
        {
          symbol: "SPY",
          name: "SPDR S&P 500 ETF Trust",
          price: 466.91,
        },
                {
          symbol: "QQQ",
          name: "Invesco QQQ Trust",
          price: 398.22,
        },
        {
          symbol: "SE",
          name: "Sea Limited",
          price: 356.95,
        },
        {
          symbol: "AMD",
          name: "Advanced Micro Devices, Inc.",
          price: 137.53,
        },
        {
          symbol: "NFLX",
          name: "Netflix, Inc.",
          price: 668.42,
        },
      ],
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
