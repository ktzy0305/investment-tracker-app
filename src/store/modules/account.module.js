import axios from "axios"
import router from "../../routes/router"

export const account = {
    namespaced: true,
    state: {
        token: localStorage.getItem('token') || null,
        login_error: null,
    },

    getters: {
        isLoggedIn: state => {
            return state.token !== null
        },

        loginError: state => {
            return state.login_error
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
        }

    },

    actions: {
        login({ commit }, user) {
            const body = {
                username: user.username,
                password: user.password
            }
            axios.post('http://127.0.0.1:3000/auth/login', body)
                .then(response => {
                    response.data["access_token"]
                    const token = response.data["access_token"]
                    localStorage.setItem('token', token)
                    axios.defaults.headers.common['Authorization'] = token
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

        register(user) {
            const body = { 
                username: user.username,
                email: user.email,
                password: user.password
            };
            axios.post('http://127.0.0.1:3000/user/register', body)
            .then(response => {
                console.log(response)
                router.push({path: '/login'})
            })
            .catch(error => {
                console.log(error)
            })
        }
    },
    
}