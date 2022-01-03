import axios from "axios";

export const auth = {
    req: axios.create({
        baseURL: "http://127.0.0.1:3000/"
    }),

    login(body){
        return this.req.post('auth/login', body)
    },

    register(body){
        return this.req.post('/users', body)
    }
}