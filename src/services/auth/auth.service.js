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
    getIndividualEntrepreneursProfileById: builder.query({
      query: (id) => `individual-entrepreneurs/${id}`,
    }),
    getLegalPersonsProfileById: builder.query({
      query: (id) => `legal-persons/${id}`,
    }),
    getNaturalPersonsProfileById: builder.query({
      query: (id) => `natural-persons/${id}`,
    }),
      signOut: builder.mutation({
          query: (body) => ({ url: "auth/sign-out", method: "POST", body }),
      }),
  }),
});

export const { useSignInMutation,
                useChangePasswordMutation ,
                useSignOutMutation ,
                useGetAccountsMutation ,
                useGetIndividualEntrepreneursProfileByIdQuery ,
                useGetLegalPersonsProfileByIdQuery ,
                useGetNaturalPersonsProfileByIdQuery ,
} = authApi;
