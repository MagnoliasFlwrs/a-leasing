import { api } from "../api";

export const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    signIn: builder.mutation({
      query: (body) => ({ url: "auth/sign-in", method: "POST", body }),
    }),
    changePassword: builder.mutation({
      query: (body) => ({ url: "auth/change-password", method: "POST", body }),
    }),
  }),
});

export const { useSignInMutation, useChangePasswordMutation } = authApi;
