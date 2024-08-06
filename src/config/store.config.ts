import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../reducer/auth.reducer";
import { authApi } from "../pages/auth/auth.Api";

const store = configureStore({
  reducer: {
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});

export default store;
