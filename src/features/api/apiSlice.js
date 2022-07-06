//import rtk query methods from the React-specific entry point
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define our single API slice object
export const apiSlice = createApi({
  // the cache reducer expects to be added at `state.api` (already default - this is optional)
  reducerPath: "api",
  // all of our requests will have URLs
  baseQuery: fetchBaseQuery({
    baseUrl: "https://server-staycations.herokuapp.com/api/v1",
  }),
  // the 'endpoints' represent operations and requests for this server
  endpoints: (builder) => ({
    //the 'getPosts' endpoint is a 'query' operation that returns data
    getLandingPage: builder.query({
      //the URL for the request is '/fakeApi/landingPage'
      query: () => "/landing-page",
    }),
    getDetailPage: builder.query({
      query: (id) => `/detail-page/${id}`,
    }),
    addNewBooking: builder.mutation({
      query: (initialState) => ({
        url: "/booking-page",
        method: "POST",
        body: initialState,
      }),
    }),
  }),
});

//Export the auto-generated hook for the 'getLandingPage' query endpoint
/**
 * The hooks are automatically named based on a standard convention:
 * use, the normal prefix for any React hook
 * The name of the endpoint, capitalized
 * The type of the endpoint, Query or Mutation
 */
export const {
  useGetLandingPageQuery,
  useGetDetailPageQuery,
  useAddNewBookingMutation,
} = apiSlice;
