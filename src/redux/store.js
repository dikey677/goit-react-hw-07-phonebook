import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import phonebookReducer from "./phonebook/phonebook-reducer";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
// Виесто legacy_createStore as createStore, ниже добавляем configureStore
// import { combineReducers } from "redux"; - включен в configureStore
// По-умолчанию в Redux Toolkit включены инструменты разработчика composeWithDevTools, импортировать отдельно их не нужно
// import { composeWithDevTools } from "redux-devtools-extension";
//-------------------------------------------------------------------------

// Redux
// const rootReducer = combineReducers({
//   contacts: phonebookReducer,
// });
// const store = createStore(rootReducer, composeWithDevTools());
//-------------------------------------------------------------------------

//Redux Toolkit
// console.log(process.env.NODE_ENV); - посмотреть, какой режим разработки используется (development/production)
const persistConfig = {
  key: "name",
  storage,
  blacklist: ["filter"],
}; // Создаем конфигурацию с параметрами ключа и хранилища данных (localStorage)

const store = configureStore({
  reducer: {
    contacts: persistReducer(persistConfig, phonebookReducer), // Сохранение данных с учетом параметров и редюсера
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER], // Фикс ошибки консоли по забору в хранилище не только данных, но и функций.
      },
    }).concat(logger), // Добавление логгера в midleware (распыляет весь middleware и добавляет логгер для отслеживания состояний)
  devTools: process.env.NODE_ENV === "development", // Данная строка сообщает - инструменты разрботчика в production доступны не будут --> process+NodeEnvironment+NodeEnvironment
});

const persistor = persistStore(store);

// eslint-disable-next-line import/no-anonymous-default-export
export default { store, persistor };
