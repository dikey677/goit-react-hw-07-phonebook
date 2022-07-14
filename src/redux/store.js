import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { contactsApi } from "../contactsApi";

const myMiddleware = (_) => (next) => (action) => {
  console.log("МОЯ ПРОСЛОЙКА MIDDLEWARE", action);
  next(action);
};

const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(contactsApi.middleware, myMiddleware, logger),
  devTools: process.env.NODE_ENV === "development",
});

// eslint-disable-next-line import/no-anonymous-default-export
export default store;
