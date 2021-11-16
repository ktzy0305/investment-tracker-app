<template>
  <div class="container">
    <!-- Login form -->
    <div class="row mt-4">
      <div class="col-lg-6 col-md-8 offset-lg-3 offset-md-2">
        <form class="form-signin" @submit.prevent>
          <h2 class="form-signin-heading">Please sign in</h2>
          <div class="alert alert-danger alert-dismissible fade show" role="alert" v-for="(error, index) in errors" v-bind:key="error">
            <span class="error-msg">{{ error }}</span>
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" @click="errors.splice(index, 1)"></button>
          </div>
          <div class="mb-3">
            <label for="inputUsername" class="sr-only">Username</label>
            <div class="input-group">
              <span class="input-group-text">@</span>
              <input
                type="text"
                id="inputUsername"
                class="form-control"
                placeholder="Username"
                v-model="username"
              />
            </div>
          </div>
          <div class="mb-3">
            <label for="inputPassword" class="sr-only">Password</label>
            <input
              type="password"
              id="inputPassword"
              class="form-control"
              placeholder="Password"
              v-model="password"
            />
          </div>
          <div class="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
          <button class="btn btn-primary btn-block" @click="checkForm()">
            Sign in
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  data() {
    return {
      errors: [],
      username: "",
      password: "",
    };
  },

  beforeMount() {
    if(this.isLoggedIn) {
      this.$router.push('/');
    }
  },

  computed: {
    ...mapGetters("account", ["isLoggedIn", "loginError"]),
  },

  methods: {
    ...mapActions('account',[
      'login',
    ]),
    checkForm() {
      this.errors = [];
      if (this.username.length > 0 && this.password.length > 0) {
        const user = {
          username: this.username,
          password: this.password,
        };
        this.login(user);
      }

      if(this.loginError !== null) {
        this.errors.push(this.loginError);
      }

      if(!this.username) {
        this.errors.push("Username is required");
      }

      if(!this.password) {
        this.errors.push("Password is required");
      }
    },
  },

  watch: {
    loginError(newValue) {
      if(newValue !== null) {
        this.errors.push(this.loginError);
      }
    }
  }
};
</script>

<style scoped>
.form-signin-heading {
  font-family: "Manrope Bold", Helvetica, Arial, sans-serif;
}

@media screen and (max-width: 768px) {
  .form-signin-heading {
    font-size: 2rem;
  }
}
</style>