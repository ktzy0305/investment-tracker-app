// import axios from "axios"
import router from "../../routes/router"
import { auth } from "../../api/auth"

export const account = {
    namespaced: true,
    state: {
        token: localStorage.getItem('token') || null,
        login_error: null,
        registration_error: null,
    },

    getters: {
        isLoggedIn: state => {
            return state.token !== null
        },

        loginError: state => {
            return state.login_error
        },

        registrationError: state => {
            return state.registration_error
        }
    },

    mutations: {
        "auth_success"(state, token){
            state.token = token
        },

        "auth_error"(state, error_msg){
            state.token = null
            state.login_error = error_msg
        },

        "auth_logout"(state){
            state.token = null
        },

        "registration_error"(state, error_msg){
            state.registration_error = error_msg
        },

        "registration_clear_error"(state){
            state.registration_error = null
        }
    },

    actions: {
        login({ commit }, user) {
            const body = {
                username: user.username,
                password: user.password
            }
            auth.login(body)
                .then(response => {
                    response.data["access_token"]
                    const token = response.data["access_token"]
                    localStorage.setItem('token', token)
                    commit("auth_success", token)
                    router.push({path: '/'})
                })
                .catch(error => {
                    commit("auth_error", error.response.data.message)
                    localStorage.removeItem('token')
                }) 
        },

        logout({ commit }) {
            commit("auth_logout")
            localStorage.removeItem('token')
            router.push({path: '/'})
        },

        register({ commit }, user) {
            const body = { 
                username: user.username,
                email: user.email,
                password: user.password
            };

            console.log(body);
            // axios.post('http://127.0.0.1:3000/users', body)
            auth.register(body)
            .then(response => {
                response.data
                commit("registration_clear_error")
                router.push({path: '/login'})
            })
            .catch(error => {
                commit("registration_error", error.response.data.message)
                console.log(error)
            })
        },

        verifyToken({ commit }) {
            const token = localStorage.getItem('token')
            var not_expired = false;
            auth.verifyToken(token)
                .then(response => {
                    response.data
                    commit("auth_success", token)
                    not_expired = true
                })
                .catch(error => {
                    console.log(error.response.data.message)
                })
                .finally(() => {
                    if (!not_expired) {
                        this.logout
                    }
                })
        }
    },
}