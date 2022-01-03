import { api } from "../../api";

export const portfolio = {
    namespaced: true,
    state: {
        transactions: [],
        transaction_result: "",
    },
    getters: {
        getTransactions: state => state.transactions,
    },
    mutations: {
        "buy_transaction": (state, payload) => {
            state.assets.push(payload);
        },
        "transaction_error": (state, payload) => {
            state.assets.push(payload);
        }
    },
    actions: {
        getTransactions({ state }) {
            api.getTransactions().then(response => {
                state.transactions = response.data;
            });
        },

        addTransaction({ state }, transaction) {
            api.addTransaction(transaction, localStorage.getItem("token"))
            .then(response => {
                state.transaction_result = response.data;
            })
            .catch(error => {
                state.transaction_result = error.response.data;
                console.log("Problem with transaction: ", error);
                console.log(error);
            });
        }
    }
}