import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import action from "./phonebook-actions";

const CONTACTS = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

// Redux Toolkit
// Теперь файл types не нужен. Type прописывается первым аргументом в createAction в виде строки.
// Во время вызова createReducer в теле функции указывается тип action с предварительным импортом файла actions
// Все форматирование выполняется 'под капотом' Redux Toolkit
const items = createReducer(CONTACTS, {
  [action.AddContact]: (state, { payload }) => [...state, payload],
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

//Redux
// const items = (state = CONTACTS, { type, payload }) => {
//   switch (type) {
//     case types.ADD:
//       return [...state, payload];

//     case types.DELETE:
//       return state.filter((contact) => contact.id !== payload);

//     default:
//       return state;
//   }
// };

// const filter = (state = "", { type, payload }) => {
//   switch (type) {
//     case types.FILTER:
//       return payload;

//     default:
//       return state;
//   }
// };
