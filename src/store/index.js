import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import checkoutReducer from "../features/checkout/checkoutSlice";
import landingPageReducer from "../features/landingPage/landingPageSlice";
import detailPageReducer from "../features/detailPage/detailPageSlice1";
import { apiSlice } from "features/api/apiSlice";
//below will create redux store and also automatically configure the redux devtools extension so that we
//can inspect the store while developing
export default configureStore({
  reducer: {
    counter: counterReducer,
    checkout: checkoutReducer,
    landingPage: landingPageReducer,
    detailPage: detailPageReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
/**
 * the API slice generates a custom middleware that needs to be added to the
 * store. This middleware must be added as well - it manages cache lifetimes
 * and expiration.
 * We can reuse the apiSlice.reducerPath field as a computed key in the reducer parameter, to ensure that the caching reducer is added in the right place.
 * We need to keep all of the existing standard middleware like redux-thunk in
 * the store setup, and the API slice's middleware typically goes after those.
 * We can do that by supplying the middleware argument to configureStore,
 * calling the provided getDefaultMiddleware() method, and adding apiSlice.
 * middleware at the end of the returned middleware array.
 */
