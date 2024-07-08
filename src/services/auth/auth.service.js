import { api } from "../api";

export const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAccounts: builder.mutation({
      query: (body) => ({ url: "auth/accounts", method: "POST", body }),
    }),
    signIn: builder.mutation({
      query: (body) => ({ url: "auth/sign-in", method: "POST", body }),
    }),
    changePassword: builder.mutation({
      query: (body) => ({ url: "auth/change-password", method: "POST", body }),
    }),
  }),
});

export const { useSignInMutation, useChangePasswordMutation , useGetAccountsMutation } = authApi;
