<template>
  <div class="container">
    <!-- Login form -->
    <div class="row mt-4">
      <div class="col-lg-6 col-md-8 offset-lg-3 offset-md-2">
        <form class="form-signin" @submit.prevent="login">
            <h2 class="form-signin-heading">Please sign in</h2>
            <div class="mb-3">
              <label for="inputEmail" class="sr-only">Email address</label>
              <input
                  type="email"
                  id="inputEmail"
                  class="form-control"
                  placeholder="Email address"
                  v-model="email"
              />
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
            <button class="btn btn-primary btn-block" type="submit">
                Sign in
            </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>