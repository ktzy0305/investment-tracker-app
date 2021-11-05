<template>
  <div id="app">
    <Navbar/>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
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
    Navbar,
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
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
