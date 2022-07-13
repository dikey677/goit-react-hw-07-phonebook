import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const contactsApi = createApi({
  reducerPath: "contactsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://62cd7b1aa43bf780085961d2.mockapi.io/contacts/",
  }),
  tagTypes: ["Item"],
  endpoints: (builder) => ({
    fetchContacts: builder.query({
      query: () => "/items",
      providesTags: ["Item"],
    }),
    deleteContact: builder.mutation({
      query: (contactId) => ({
        url: `/items/${contactId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Item"],
    }),
    createContact: builder.mutation({
      query: (newContact) => ({
        url: "/items",
        method: "POST",
        body: "newContact",
      }),
      invalidatesTags: ["Item"],
    }),
  }),
});

export const {
  useFetchContactsQuery,
  useDeleteContactMutation,
  useCreateContactMutation,
} = contactsApi;
