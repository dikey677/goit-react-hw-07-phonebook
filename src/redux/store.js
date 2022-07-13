import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import phonebookReducer from "./phonebook/phonebook-reducer";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { contactsApi } from "../contactsApi";

const myMiddleware = (store) => (next) => (action) => {
  console.log("Моя прослойка", action);
  next(action);
};

const store = configureStore({
  reducer: {
    contacts: phonebookReducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(contactsApi.middleware, myMiddleware, logger),
  devTools: process.env.NODE_ENV === "development",
});

// eslint-disable-next-line import/no-anonymous-default-export
export default store;
