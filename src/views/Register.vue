<template>
  <div class="container user-registration">
    <div class="row mt-4">
      <MultiForm></MultiForm>
    </div>
  </div>
</template>

<script>
import MultiForm from '@/components/MultiForm'
import { mapGetters } from 'vuex'

export default {
  components: {
    MultiForm
  },

  computed: {
    ...mapGetters("account", ["isLoggedIn"]),
  },

  beforeMount() {
    if(this.isLoggedIn) {
      this.$router.push('/');
    }
  },
};
</script>

<style scoped>
.form-registration-heading {
  font-family: "Manrope Bold", Helvetica, Arial, sans-serif;
}

@media screen and (max-width: 768px) {
  .form-registration-heading {
    font-size: 2rem;
  }
}
</style>