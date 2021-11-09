<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top">
        <div class="container">
            <a class="navbar-brand" href="/">
                <img src="@/assets/logos/app_logo.png" alt="" width="30" height="24">
                <span class="ms-2 fw-bold">Investment Tracker</span>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <div class="navbar-nav me-auto mb-2 mb-lg-0">
                    <router-link to="/" class="nav-item nav-link">Home</router-link>
                    <router-link to="/market" class="nav-item nav-link">Markets</router-link>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Trade
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><router-link to="/p2p" class="dropdown-item">P2P</router-link></li>
                            <li><router-link to="/" class="dropdown-item">Spot</router-link></li>
                            <li><router-link to="/" class="dropdown-item">Futures</router-link></li>
                        </ul>
                    </li>
                    <router-link to="/cats" class="nav-item nav-link">Cats</router-link>
                </div>
                <div class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <router-link to="/login" class="nav-item nav-link">Login</router-link>
                    <router-link to="/register" class="nav-item nav-link btn btn-secondary text-white">Register</router-link>
                </div>
            </div>
        </div>
    </nav>
</template>