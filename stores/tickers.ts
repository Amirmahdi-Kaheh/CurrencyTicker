import { defineStore } from "pinia";

export const useTickersStore = defineStore("ticker", {
    // arrow function recommended for full type inference
    state: () => {
        return {
            tickers: [],
            liveTickers: ['SOL-USDT', 'BTC-USDT', 'ETH-USDT', 'OP-USDT', 'AVAX-USDT', 'DOT-USDT', 'XRP-USDT', 'ARB-USDT', 'NEAR-USDT', 'MATIC-USDT']
        };
    },
    getters: {
        getTickersByPair: (state: any) => {
            return (pair: string) =>
                state.tickers?.filter((item: any) => item.pair == pair);
        },
    },
    actions: {
        async getAllTickers () {
            const {data: tickersData } = await useFetch('/api/tickers');
            this.tickers = tickersData.value;
        },
    },
});
