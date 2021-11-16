<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top">
        <div class="container">
            <a class="navbar-brand" href="/">
                <img src="@/assets/logos/app_logo.png" alt="" width="30" height="24">
                <span class="ms-2 fw-bolder">Investment Tracker</span>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <div class="navbar-nav me-auto mb-2 mb-lg-0" v-if="isLoggedIn">
                    <router-link to="/" class="nav-item nav-link">Home</router-link>
                    <router-link to="/market" class="nav-item nav-link">Markets</router-link>
                    <!-- <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Trade
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><router-link to="/p2p" class="dropdown-item">P2P</router-link></li>
                            <li><router-link to="/" class="dropdown-item">Spot</router-link></li>
                            <li><router-link to="/" class="dropdown-item">Futures</router-link></li>
                        </ul>
                    </li> -->
                    <router-link to="/cats" class="nav-item nav-link">Cats</router-link>
                </div>
                <div class="navbar-nav ms-auto mb-2 mb-lg-0" v-if="isLoggedIn">
                    <router-link to="/" id="profile_btn" class="nav-item nav-link btn btn-primary mb-2 mb-lg-0 me-0 me-lg-2"><font-awesome-icon :icon="['fas', 'user-circle']" /> Profile</router-link>
                    <button id="logout_btn" class="nav-item nav-link btn btn-danger" @click="logout"><font-awesome-icon :icon="['fas', 'sign-out-alt']" /> Log Out</button>
                </div>
                <div class="navbar-nav ms-auto mb-2 mb-lg-0" v-else>
                    <router-link to="/login" id="login_btn" class="nav-item nav-link btn btn-primary text-white mb-2 mb-lg-0 me-0 me-lg-2">Login</router-link>
                    <router-link to="/register" id="register_btn" class="nav-item nav-link btn btn-outline-secondary">Register</router-link>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSignOutAlt, faUserCircle } from '@fortawesome/free-solid-svg-icons';

library.add(faSignOutAlt, faUserCircle);

export default {
    computed: {
        ...mapGetters('account', [
            'isLoggedIn'
        ])
    },
    methods: {
        ...mapActions('account',[
            'logout'
        ])
    },
    mounted() {
        if(this.isLoggedIn) {
            this.$router.push('/')
        }
    }
}

</script>


<style scoped>
    .btn-primary {
    background-color: #850aff !important;
    color: #fff;
    }

    .navbar-brand > span{
        font-family: "Manrope ExtraBold", Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    #logout_btn, #profile_btn{
        color: #fff;
    }

    #logout_btn:hover, #profile_btn:hover, #register_btn:hover {
        color: #fff !important;
    }
</style>