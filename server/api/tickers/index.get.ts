import call from "~/server/api/plugins/ApiFactory";

export default defineEventHandler(async (event) => {
    const response = await call<any>(
        "GET",
        "/oapi/v1/market/tickers",
    );
    return response.data.data;
});
