
export default defineNuxtPlugin( (nuxtApp) => {
    if(process.client){
        const config = useRuntimeConfig();

        const {liveTickers } = useTickersStore();
        const {tickers} = storeToRefs(useTickersStore())
        const ws = new WebSocket(`wss://${config.public.webSocketBaseUrl}`);

        const mappedLiveTickers = liveTickers.map((pair: any) => {
            return { "channel": "tickers", "instId": pair };
        });

        ws.onopen = () => {
            console.log('WebSocket connected');

            ws.send(JSON.stringify({
                "op": "subscribe",
                "args": mappedLiveTickers
            }))
        };

        ws.onmessage = (event) => {
            const data = JSON.parse(event.data);
            const scopedTicker = tickers.value.find((symbols)=> symbols.symbol === data.arg.instId);

            if(scopedTicker){
                // Update Tickers store with received data
                scopedTicker.last = data.data[0].last;
                scopedTicker.open24h = data.data[0].open24h;
            }
        };

        ws.onclose = () => {
            console.log('WebSocket closed');
        };
    }
});
