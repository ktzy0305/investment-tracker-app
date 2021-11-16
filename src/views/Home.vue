<template>
  <div class="home">
    <section class="main-section">
      <div class="container">
        <div class="row main-content">
          <div class="col-lg-6 main-message-container px-5">
            <h1 class="main-title">
              Track your investments anywhere, anytime
            </h1>
            <p class="main-description">
              Monitor your assets and investments in one place, on any device.
            </p>
            <div class="button-container">
              <a class="btn btn-primary me-3 px-4 py-3" href="">Get Started</a>
              <a class="btn btn-light px-4 py-3" href="#feature-section">Learn More</a>
            </div>
          </div>
          <div class="col-lg-6">
            <img
              class="img-fluid d-block mx-auto mockup"
              src="@/assets/images/mockup.png"
            />
          </div>
        </div>
      </div>
      <div class="wave">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
    </section>
    <section class="feature-section bg-primary-accent" id="feature-section">
      <div class="container pt-4">
        <div class="row">
          <div class="col-lg-6">
            <img
              class="img-fluid d-block mx-auto mockup"
              src="@/assets/images/mockup.png"
            />
          </div>
          <div class="col-lg-6 text-white px-5 v-align-middle">
            <h2 class="section-title">
              See what's happening with your investments
            </h2>
            <p class="section-description">
              Watch your investments grow and track your portfolio. We track
              your investments in real time, so you can see how your investments
              are doing from the day you bought them.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  components: {
    // HelloWorld
  },
};
</script>

<style scoped>
section {
  position: relative;
}

.bg-primary-accent {
  background-color: #850aff;
}

.text-primary-accent {
  color: #850aff;
}

.main-message-container, .v-align-middle {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.main-content {
  padding-top: 50px;
  padding-bottom: 120px;
}

.main-title {
  font-family: "Manrope ExtraBold", Helvetica, Arial, sans-serif;
  font-size: 54px;
}

.main-description {
  font-family: "Manrope SemiBold", Helvetica, Arial, sans-serif;
  font-size: 23px;
}

.mockup {
  width: 256px;
  height: auto;
}

.button-container > a.btn {
  font-family: "Manrope SemiBold", Helvetica, Arial, sans-serif;
  font-size: 20px;
}

.btn-primary {
  background-color: #850aff !important;
  color: #fff;
}

.btn-light {
  box-shadow: 2px 2px 5px #ccc;
}

.wave {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
}

.wave svg {
  position: relative;
  display: block;
  width: calc(100% + 1.3px);
  height: 140px;
}

.wave .shape-fill {
  fill: #850aff;
}

.section-title {
  font-family: "Manrope ExtraBold", Helvetica, Arial, sans-serif;
  font-size: 40px;
}

.section-description{
    font-size: 20px;
}
</style>