<template>
    <div class="container">
        <div class="row mt-3 mb-3">
            <h1>Cats</h1>
        </div>
        <div class="row">
            <div class="col-lg-3 col-md-4 col-sm-6" v-for="cat in cats" v-bind:key="cat._id">
                <div class="card">
                    <div class="card-header">
                        <h5 class="card-title"><router-link :to="'/cats/' + cat._id">{{ cat.name }}</router-link></h5>
                    </div>
                    <div class="card-body">
                        <div class="card-text">
                            <div><span class="fw-bold">Age:</span> {{ cat.age }}</div>
                            <div><span class="fw-bold">Breed:</span> {{ cat.breed }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      cats: [],
    };
  },

  mounted() {
    axios.get("http://127.0.0.1:3000/cats").then((response) => {
      this.cats = response.data;
    });
  },
};
</script>

<style>
</style>