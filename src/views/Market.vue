<template>
  <div class="container">
    <div class="row mt-4">
      <div class="listing col-lg-3 col-md-4 mb-3 d-flex align-items-stretch" v-for="listing in listings" v-bind:key="listing.symbol">
        <Listing v-bind:listing="listing" />
      </div>
      <div v-for="data in market_data" v-bind:key="data.symbol">
        <div>
          {{ data.symbol }}
        </div>
        <div>
          ${{ data.price }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Listing from "@/components/Listing.vue";
// import { alphaVantageHelper } from "@/api/alphavantagehelper";
// import yahooFinance from "yahoo-finance2";
const yahooFinance = require("yahoo-finance");

export default {
    components: {
        Listing,
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
        market_data: [],
        symbols: [
          "AAPL",
          "MSFT",
          "TSLA",
          "FB",
          "SPY",
          "QQQ",
          "SE",
          "AMD",
          "NFLX",
        ],
      };
    },
    methods: {
      async fetchData() {
        // for (let i = 0; i < this.symbols.length; i++) {
        //   const symbol = this.symbols[i];
        //   const data = await alphaVantageHelper.getDaily(symbol);
        //   // let data_symbol = data["Meta Data"]["2. Symbol"];
        //   let dates = Object.keys(data["Time Series (Daily)"]);
        //   let numDates = dates.length;
        //   let price = parseFloat(data["Time Series (Daily)"][dates[numDates-1]]["4. close"]).toFixed(2);
        //   let stock_data = {
        //     symbol: symbol,
        //     price: price,
        //   };
        //   this.market_data.push(stock_data);
        // }

        // alphaVantageHelper.getDaily(`msft`).then((data) => {
        //   console.log(data);
        //   let symbol = data["Meta Data"]["2. Symbol"];
        //   let dates = Object.keys(data["Time Series (Daily)"]);
        //   let numDates = dates.length;
        //   let price = parseFloat(data["Time Series (Daily)"][dates[numDates-1]]["4. close"]).toFixed(2);
        //   data = {
        //     symbol: symbol,
        //     price: price,
        //   };
        //   this.market_data.push(data);
        // })

        for (let i = 0; i < this.symbols.length; i++) {
          const symbol = this.symbols[i];
          yahooFinance.quote({
            symbol: symbol,
            modules: ["price"],
          }).then((quote) => {
            let price = quote.price.regularMarketPrice;
            let stock_data = {
              symbol: symbol,
              price: price,
            };
            this.market_data.push(stock_data);
          });
        }
      },

      async displayMarketData() {
        // Alpha Vantage API

        // for (let i = 0; i < 3; i++) {
        //   let listing = this.listings[i];
        //   alphaVantageHelper.getDaily(listing.symbol).then((data)=>{
        //     let dates = Object.keys(data["Time Series (Daily)"]);
        //     let numDates = dates.length;
        //     listing.price = parseFloat(data["Time Series (Daily)"][dates[numDates-1]]["4. close"]).toFixed(2);
        //   });
        // }

        // Yahoo Finance V1

        for(let i = 0; i < this.listings.length; i++){
          let listing = this.listings[i];
          yahooFinance.quote({
            symbol: listing.symbol,
            modules: ['price'], // see the docs for the full list
          }).then(quote => {
            listing.price = quote.price.regularMarketPrice.toFixed(2);
          });
        }

        // Yahoo Finance V2

        // for(let i = 0; i < this.listings.length; i++) {
        //   let listing = this.listings[i];
        //   const result = await yahooFinance.quote(listing.symbol);
        //   listing.price = result.regularMarketPrice;
        // }
      },
    },
    mounted() {
      this.fetchData();
      this.displayMarketData();
    },
}
</script>

<style>

</style>