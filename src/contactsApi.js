import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const contactsApi = createApi({
  reducerPath: "contactsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://62cd7b1aa43bf780085961d2.mockapi.io/contacts/",
  }),
  endpoints: (builder) => ({
    fetchContacts: builder.query({
      query: () => "/items",
    }),
  }),
});

export const { useFetchContactsQuery } = contactsApi;
