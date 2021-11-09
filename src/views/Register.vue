<template>
  <div class="container user-registration">
    <div class="row mt-4">
      <!-- User registration form -->
      <div class="col-lg-6 offset-lg-3">
        <form class="form-horizontal" role="form" @submit.prevent="register">
          <h2 class="form-registration-heading">User Registration</h2>
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
              id="pwd"
              placeholder="Enter password"
              v-model="password_confirmation"
            />
          </div>
          <div class="mb-3">
            <small class="form-text">By creating your account, you agree to our <a href="">Terms and Conditions</a>.</small>
          </div>
          <button type="submit" class="btn btn-primary">Register</button>
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