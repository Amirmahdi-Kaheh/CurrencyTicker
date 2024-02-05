import call from "~/server/api/plugins/ApiFactory";
import {getIconUrl} from "~/server/utils/general";

interface IssuedTicker {
    last: string;
    open_24h: string;
    symbol: string;
}

export default defineEventHandler(async (event) => {
    const response = await call<any>(
        "GET",
        "/oapi/v1/market/tickers",
    );

    return response.data.tickers.map((item: IssuedTicker) => ({
        last: item.last,
        open24h: item.open_24h,
        symbol: item.symbol,
        coin: item.symbol.split("-")[0],
        pair: item.symbol.split("-")[1],
        icon: getIconUrl(item.symbol.split("-")[0].toLowerCase())
    }));
});
