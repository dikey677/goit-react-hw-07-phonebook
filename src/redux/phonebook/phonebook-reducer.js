import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import action from "./phonebook-actions";

const CONTACTS = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

const items = createReducer(CONTACTS, {
  addContactSuccess: (state, { payload }) => [...state, payload],
  [action.DeleteContact]: (state, { payload }) =>
    state.filter((contact) => contact.id !== payload),
});

const filter = createReducer("", {
  [action.FilterContact]: (state, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});
