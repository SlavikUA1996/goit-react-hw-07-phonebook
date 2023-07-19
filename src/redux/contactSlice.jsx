import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contctsApi = createApi({
  reducerPath: 'contcts',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://64b7827b21b9aa6eb07833af.mockapi.io',
  }),
  tagTypes: ['contacts'],
  endpoints: builder => ({
    getContacts: builder.query({
      query: () => `/contacts`,
      providesTags: ['contacts'],
    }),
  }),
});

export const { useGetContactsQuery } = contctsApi;