import call from "~/server/api/plugins/ApiFactory";

export default defineEventHandler(async (event) => {
    const response = await call<any>(
        "GET",
        "/server/api/support/faq",
    );
    return response.data.data;
});
