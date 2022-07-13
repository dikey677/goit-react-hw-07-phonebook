import { createAction } from "@reduxjs/toolkit";
// import { nanoid } from "nanoid";
import axios from "axios";
axios.defaults.baseURL = "https://62cd7b1aa43bf780085961d2.mockapi.io/contacts";

const AddContact = (onSubmit) => (dispatch) => {
  const item = { ...onSubmit };

  dispatch({ type: "phonebook/addContactRequest" });

  axios
    .post(`/items`, item)
    .then(({ data }) =>
      dispatch({ type: "phonebook/addContactSuccess", payload: data })
    );
};

// const AddContact = ({ onSubmit }) => {
//   return async (dispatch) => {
//     dispatch({ type: "phonebook/addContactRequest" });
//     const response = await axios.post(`/items`, onSubmit);

//     console.log("Ответ от сервера", response);

//     dispatch({
//       type: "phonebook/addContactSuccess",
//       payload: response.data,
//     });
//   };
// };

const DeleteContact = createAction("phonebook/delete");
const FilterContact = createAction("phonebook/filter");

// eslint-disable-next-line import/no-anonymous-default-export
export default { AddContact, DeleteContact, FilterContact };
