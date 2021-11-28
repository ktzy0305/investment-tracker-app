<template>
  <div class="container user-registration">
    <div class="row mt-4">
      <MultiForm></MultiForm>
      <!-- User registration form -->
      <!-- <div class="col-lg-6 offset-lg-3">
        <form class="form-horizontal" role="form" @submit.prevent>
          <h2 class="form-registration-heading">Create Your Account</h2>
          <div class="alert alert-danger alert-dismissible fade show" role="alert" v-for="(error, index) in errors" v-bind:key="error">
            <span class="error-msg">{{ error }}</span>
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" @click="errors.splice(index, 1)"></button>
          </div>
          <div class="mb-3">
            <label class="form-label" for="username">Username:</label>
            <div class="input-group">
              <span class="input-group-text">@</span>
              <input
                type="text"
                class="form-control"
                id="username"
                placeholder="Create a username"
                v-model="username"
              />
            </div>
          </div>
          <div class="mb-3">
            <label class="form-label" for="email">Email:</label>
            <input
              type="email"
              class="form-control"
              id="email"
              placeholder="Enter email"
              v-model="email"
            />
          </div>
          <div class="mb-3">
            <label class="control-label col-sm-2" for="pwd">Password:</label>
            <input
            type="password"
            class="form-control"
            id="pwd"
            placeholder="Enter password"
            v-model="password"
            />
            <div id="passwordHelpBlock" class="form-text">
              <ul>
                <li>
                  Must be at least 8 characters long.
                </li>
                <li>
                  Must contain at least one lowercase letter.
                </li>
                <li>
                  Must contain at least one uppercase letter.
                </li>
                <li>
                  Must contain at least one number.
                </li>
              </ul>
            </div>
          </div>
          <div class="mb-3">
            <label class="control-label" for="pwd">Confirm Password:</label>
            <input
              type="password"
              class="form-control"
              id="pwd2"
              placeholder="Re-enter password"
              v-model="password_confirmation"
            />
          </div>
          <div class="mb-3">
            <small class="form-text">By creating your account, you agree to our <a href="">Terms and Conditions</a>.</small>
          </div>
          <button class="btn btn-primary" @click="checkForm()">Register</button>
        </form>
      </div> -->
    </div>
  </div>
</template>

<script>
// import { mapActions, mapGetters } from 'vuex'
import MultiForm from '@/components/MultiForm'

export default {
  components: {
    MultiForm
  },

  // data() {
  //   return {
  //     username: '',
  //     email: '',
  //     password: '',
  //     password_confirmation: '',
  //     errors: [],
  //   }
  // },

  // beforeMount() {
  //   if(this.isLoggedIn) {
  //     this.$router.push('/');
  //   }
  // },

  // computed: {
  //   ...mapGetters('account',['isLoggedIn', 'registrationError']),
  // },

  // methods: {
  //   ...mapActions('account',[
  //     'register',
  //   ]),
  //   checkForm() {
  //     this.errors = []
  //     if (this.username.length < 3) {
  //       this.errors.push('Username must be at least 3 characters long.')
  //       return;
  //     }
  //     if (this.email.length < 3) {
  //       this.errors.push('Email must be at least 3 characters long.')
  //       return;
  //     }
  //     if (this.password.length < 8) {
  //       this.errors.push('Password must be at least 8 characters long.')
  //       return;
  //     }
  //     if (this.password !== this.password_confirmation) {
  //       this.errors.push('Passwords do not match.')
  //       return;
  //     }
  //     const new_user = {
  //       username: this.username,
  //       email: this.email,
  //       password: this.password,
  //     };
  //     this.register(new_user);

  //     if(this.registrationError){
  //       this.errors.push(this.registrationError);
  //     }
  //   }
  // },

  // watch: {
  //   registrationError(newVal) {
  //     if(newVal !== null) {
  //       this.errors.push(newVal);
  //     }
  //   }
  // }
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