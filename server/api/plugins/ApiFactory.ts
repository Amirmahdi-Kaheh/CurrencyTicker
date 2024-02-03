import { $Fetch, FetchOptions } from "ofetch";

async function call<T>(
    method: string,
    url: string,
    data?: object,
    fetchOptions?: FetchOptions<"json">,
): Promise<T> {
    return await $fetch(url, {
        method,
        ...(method === "GET" ? {} : { body: data }),
        ...fetchOptions,
        headers: {
            ...fetchOptions?.headers,
        },
        baseURL: useRuntimeConfig().public.apiBaseUrl,
    })
        .then((response) => {
            return {
                code: 200,
                message: "OK",
                data: response,
            };
        })
        .catch((e) => {
            console.log("error in factory", e);
            return {
                code: e.statusCode,
                message: e.data,
            };
        });
}

export default call;
