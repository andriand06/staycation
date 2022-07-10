
import { apiSlice } from "features/api/apiSlice";
export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getDetailPage: builder.query({
      query: (id) => `/detail-page/${id}`,
    })
  }),
});

export const { useGetDetailPageQuery } = extendedApiSlice;
export const { getDetailPage } = extendedApiSlice.endpoints.getDetailPage.select()
/**
 * RTK Inject endpoint Version
 */
