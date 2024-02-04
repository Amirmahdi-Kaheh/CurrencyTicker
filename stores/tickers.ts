import { defineStore } from "pinia";

export const useTickersStore = defineStore("ticker", {
    // arrow function recommended for full type inference
    state: () => {
        return {
            tickers: []
        };
    },

    actions: {
        async getAllTickers () {
            const {data: tickersData } = await useFetch('/api/tickers');
            this.tickers = tickersData.value;
        }
    },
});
