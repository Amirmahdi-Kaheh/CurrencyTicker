export default defineNuxtPlugin(async (nuxtApp) => {
    if (process.server) {
        const tickersStore = useTickersStore();
        await tickersStore.getAllTickers();
    }
});
