import axios from "axios";

export const api = {
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

    getTransactions(token) {
        return this.req.get("/transactions", this.options(token));
    },

    addTransaction(body, token){
        return this.req.post('/transactions', body, this.options(token));
    }
}