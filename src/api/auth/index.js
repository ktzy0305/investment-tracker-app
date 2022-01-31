import axios from "axios";

export const auth = {
    req: axios.create({
        baseURL: "http://127.0.0.1:3000/"
    }),

    options: (token)=>{
        return {
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Authorization": "Bearer " + token,
            }
        }
    },

    login(body){
        return this.req.post('auth/login', body)
    },

    register(body){
        return this.req.post('/users', body)
    },

    verifyToken(token){
        return this.req.get('/auth/verifyToken', this.options(token))
    }
}