<template>
  <div id="app">
    <Navbar/>
    <router-view></router-view>
    <v-idle
      :events="['mousemove']" 
      :duration="1800"
      :reminders="[300, 60]"
      @idle="onidle" 
      @remind="onremind"
      v-if="isLoggedIn"
      hidden
    />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "App",
  components: {
    Navbar,
  },
  computed: {
    ...mapGetters("account", ["isLoggedIn"]),
  },
  methods:{
    ...mapActions("account", ["logout"]),
    onidle(){
      this.logout();
      this.$swal({
        title: "You have been logged out",
        text: "For security reasons you are automatically logged out when you have been inactive for 30 minutes. If you like to continue using the app, please log in again.",
        icon: "info",
        confirmButtonColor: "#850aff",
        confirmButtonText: "OK"
      });
    },
    onremind(time){
      this.$swal({
        title: "You have been idle for too long",
        text: `You will be logged out in ${time/60} minute(s)`,
        icon: "warning",
        confirmButtonColor: "#850aff",
        confirmButtonText: "OK"
      });
    },
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
  border: #850aff !important;
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
