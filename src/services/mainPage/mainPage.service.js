import { api } from "../api";

export const mainPageApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getNews: builder.query({
            query: ({ limit, page }) => `company-news?limit=${limit}&page=${page}`,
        }),
        getPromotions: builder.query({
            query: ({ limit, page }) => `company-promotions?limit=${limit}&page=${page}`,
        }),
        getHistory: builder.query({
            query: ({ limit, page }) => `company-histories?limit=${limit}&page=${page}`,
        }),
        getCatalog: builder.query({
            query: ({ limit, page }) => `catalog-elements?limit=${limit}&page=${page}`,
        }),
        getReviews: builder.query({
            query: ({ limit, page }) => `company-reviews?limit=${limit}&page=${page}`,
        }),
    }),
});

export const {
    useGetNewsQuery,
    useGetPromotionsQuery,
    useGetHistoryQuery,
    useGetCatalogQuery,
    useGetReviewsQuery
} = mainPageApi;

