<template>
  <div class="container">
    <div class="row mt-4">
      <div class="listing col-lg-3 col-md-4 mb-3 d-flex align-items-stretch" v-for="listing in listings" v-bind:key="listing.symbol">
        <Listing v-bind:listing="listing" />
      </div>
    </div>
  </div>
</template>

<script>
import Listing from "@/components/Listing.vue";

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
    };
  },
}
</script>

<style>

</style>