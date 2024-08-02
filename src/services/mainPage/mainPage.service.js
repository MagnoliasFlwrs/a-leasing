import { api } from "../api";

export const mainPageApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getNews: builder.query({
            query: ({ limit, page }) => `company-news?limit=${limit}&page=${page}`,
        }),
        getPromotions: builder.query({
            query: ({ limit, page }) => `company-promotions?limit=${limit}&page=${page}`,
        }),
    }),
});

export const {
    useGetNewsQuery,
    useGetPromotionsQuery
} = mainPageApi;

