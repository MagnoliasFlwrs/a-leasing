import { api } from "../api";

export const faqApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getFaqCategories: builder.query({
            query: ({ limit, page }) => `faq-categories?limit=${limit}&page=${page}`,
        }),
        getFaqCategoryById: builder.query({
            query: ({ id }) => `faq-categories/${id}`,
        }),
        getFaqQuestionsByCategoryId: builder.query({
            query: ({limit,page,id }) => `faq-questions?limit=${limit}&page=${page}&filter%5BcategoryId%5D=${id}`,
        }),

    }),
});

export const {
    useGetFaqCategoriesQuery,
    useGetFaqCategoryByIdQuery,
    useGetFaqQuestionsByCategoryIdQuery,
} = faqApi;

