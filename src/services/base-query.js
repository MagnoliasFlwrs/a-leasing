import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { Mutex } from "async-mutex";
import { API_URL } from "../lib/constants";
import { logout, setTokens } from "../lib/store/features/auth";

const mutex = new Mutex();

export const baseQueryWithAuth = fetchBaseQuery({
  baseUrl: API_URL,
  prepareHeaders: (headers, { getState }) => {
    const auth = getState().auth;
    if (auth.isAuth) {
      const token = auth.tokens.accessToken;
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

export const baseQueryWithReauth = async (args, api, extraOptions) => {
  await mutex.waitForUnlock();
  let result = await baseQueryWithAuth(args, api, extraOptions);
  if (result.error && result.error.status === 401) {
    // checking whether the mutex is locked
    if (!mutex.isLocked()) {
      const release = await mutex.acquire();
      try {
        const getState = api.getState;
        const dispatch = api.dispatch;
        const authState = getState().auth;
        if (authState.isAuth) {
          const refreshResult = await baseQueryWithAuth(
            {
              url: "auth/refresh",
              method: "POST",
              body: { token: authState.tokens.refreshToken },
            },
            api,
            extraOptions
          );
          if (refreshResult.data) {
            // store the new token
            dispatch(setTokens(refreshResult.data));
            // retry the initial query
            result = await baseQueryWithAuth(args, api, extraOptions);
          } else api.dispatch(logout());
        }
      } finally {
        // release must be called once the mutex should be released again.
        release();
      }
    } else {
      // wait until the mutex is available without locking it
      await mutex.waitForUnlock();
      result = await baseQueryWithAuth(args, api, extraOptions);
    }
  }
  return result;
};
