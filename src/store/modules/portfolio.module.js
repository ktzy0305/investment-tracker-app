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
        "SET_TRANSACTION": (state, payload) => {
            state.transactions = payload;
        },
        "transaction_error": (state, payload) => {
            state.assets.push(payload);
        }
    },
    actions: {
        getAllTransactions({ commit }) {
            api.getTransactions().then(response => {
                commit("SET_TRANSACTION", response.data);
            });
        },

        getUserTransactions({ commit }) {
            api.getUserTransactions(localStorage.getItem("token")).then(response => {
                commit("SET_TRANSACTION", response.data);
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