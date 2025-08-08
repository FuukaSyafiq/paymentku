import { excludeRedirectRouteWhenUnauth, route } from "../constant/route";
import { IncomeData, Response } from "../types/response";
import { authApi } from "./authApi";

const graphApi = authApi.injectEndpoints({
  endpoints: (build) => ({
    getIncomeData: build.query<Response<IncomeData[]>, void>({
      query: () => ({
        url: "graph/income",
        credentials: "include",
      }),
      providesTags: ["incomegraph"],
      transformErrorResponse(baseQueryReturnValue, meta) {
        if (
          (meta?.response?.status === 401 || meta?.response?.status === 403) &&
          !excludeRedirectRouteWhenUnauth.includes(window.location.pathname)
        ) {
          window.location.href =
            import.meta.env.VITE_FRONTEND_URL + route["signin"];
        }
        return baseQueryReturnValue;
      },
    }),
    getOutcomeData: build.query<Response<IncomeData[]>, void>({
      query: () => ({
        url: "graph/outcome",
        credentials: "include",
      }),
      providesTags: ["outcomegraph"],
      transformErrorResponse(baseQueryReturnValue, meta) {
        if (
          (meta?.response?.status === 401 || meta?.response?.status === 403) &&
          !excludeRedirectRouteWhenUnauth.includes(window.location.pathname)
        ) {
          window.location.href =
            import.meta.env.VITE_FRONTEND_URL + route["signin"];
        }
        return baseQueryReturnValue;
      },
    }),
  }),
});

export const { useGetIncomeDataQuery, useGetOutcomeDataQuery } = graphApi;
