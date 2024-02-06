export default defineNuxtPlugin(async (nuxtApp) => {
    if (process.server) {
        // Fetch and Store all tickers in server init hook
        const tickersStore = useTickersStore();
        await tickersStore.getAllTickers();
    }
});
