import apikey from "raw-loader!../../../credentials/alphavantage-api-key.txt"
const alphaVantage = require("alphavantage")({key: apikey});

export const alphaVantageHelper = {
    getDaily: (symbol) => {
        return alphaVantage.data.daily(symbol);
    },

    getIntraday: (symbol, interval) => {
        return alphaVantage.data.intraday(symbol, interval);
    },
}