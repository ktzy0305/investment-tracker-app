import axios from "axios";

export const portfolio = {
    namespaced: true,
    state: {
        assets: [],
    },
    mutations: {
        "add_transaction": (state, payload) => {
            state.assets.push(payload);
        }
    },
    actions: {
        addTransaction({ commit }, transaction) {
            const body = transaction;
            commit('add_transaction', body);
            return axios.post('/transactions', body);
        }
    }
}