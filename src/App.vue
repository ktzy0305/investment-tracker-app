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
@font-face {
  font-family: "Manrope ExtraLight";
  src: local("ManropeExtraLight"), 
       url(./assets/fonts/Manrope-ExtraLight.ttf) format("truetype");
}

@font-face {
  font-family: "Manrope Light";
  src: local("Manrope Light"), 
       url(./assets/fonts/Manrope-Light.ttf) format("truetype");
}

@font-face {
  font-family: "Manrope Medium";
  src: local("Manrope Medium"), 
       url(./assets/fonts/Manrope-Medium.ttf) format("truetype");
}

@font-face {
  font-family: "Manrope Regular";
  src: local("Manrope Regular"), 
       url(./assets/fonts/Manrope-Regular.ttf) format("truetype");
}

@font-face {
  font-family: "Manrope SemiBold";
  src: local("Manrope SemiBold"), 
       url(./assets/fonts/Manrope-SemiBold.ttf) format("truetype");
}

@font-face {
  font-family: "Manrope Bold";
  src: local("Manrope Bold"), 
       url(./assets/fonts/Manrope-Bold.ttf) format("truetype");
}

@font-face {
  font-family: "Manrope ExtraBold";
  src: local("ManropeExtraBold"), 
       url(./assets/fonts/Manrope-ExtraBold.ttf) format("truetype");
}

@font-face {
  font-family: "Manrope";
  src: local("Manrope"), 
       url(./assets/fonts/Manrope-VariableFontWeight.ttf) format("truetype");
}

html{
    scroll-behavior: smooth;
}

.btn-primary {
  background-color: #850aff !important;
  color: #fff;
}

#app {
  font-family: "Manrope", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
