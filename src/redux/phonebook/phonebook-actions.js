import { createAction } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

//Redux
// const AddContact = (onSubmit) => ({
//   type: types.ADD,
//   payload: {
//     id: nanoid(10),
//     ...onSubmit,
//   },
// });

// const DeleteContact = (contactId) => ({
//   type: types.DELETE,
//   payload: contactId,
// });

// const FilterContact = (value) => ({
//   type: types.FILTER,
//   payload: value,
// });

//Redux toolkit
// Вызывается функция createAction, в параметре которой указывается type.Если второй аргумент для действия сложной формы(как AddContact),
// то он передается как анонимная функция.сли второй аргумент для действия простой формы, то он передается при dispatch
const AddContact = createAction("phonebook/add", (onSubmit) => {
  return {
    payload: { id: nanoid(10), ...onSubmit },
  };
});
const DeleteContact = createAction("phonebook/delete");
const FilterContact = createAction("phonebook/filter");

// eslint-disable-next-line import/no-anonymous-default-export
export default { AddContact, DeleteContact, FilterContact };
