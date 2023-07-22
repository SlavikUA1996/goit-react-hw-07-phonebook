import { createSlice } from '@reduxjs/toolkit';
import {
  contactsApi,
  addContacts,
  deleteContacts,
  toggleCompleted,
} from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    filter: '',
  },

  extraReducers: {
    [contactsApi.pending]: handlePending,
    [contactsApi.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [contactsApi.rejected]: handleRejected,
    [addContacts.pending]: handlePending,
    [addContacts.fulfilled](state, action) {
      console.log('add', state, action);
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },

    [addContacts.rejected]: handleRejected,
    [deleteContacts.pending]: handlePending,
    [deleteContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        contact => contact.id === action.payload.id
      );
      state.items.splice(index, 1);
    },
    [deleteContacts.rejected]: handleRejected,
    [toggleCompleted.pending]: handlePending,
    [toggleCompleted.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        contact => contact.id === action.payload.id
      );
      state.items.splice(index, 1, action.payload);
    },
    [toggleCompleted.rejected]: handleRejected,
  },
});

export const contactsReducer = contactsSlice.reducer;



//   reducerPath: 'contacts',
//   baseQuery: fetchBaseQuery({
//     baseUrl: 'https://64b7827b21b9aa6eb07833af.mockapi.io',
//   }),
//   tagTypes: ['contacts'],
//   endpoints: builder => ({
//     getContacts: builder.query({
//       query: () => `/contacts`,
//       providesTags: ['contacts'],
//     }),
      
//        deleteContact: builder.mutation({
//       query: id => ({
//         url: `/contacts/${id}`,
//         method: 'DELETE',
//       }),
//       invalidatesTags: ['contacts'],
//        }),
       
//       addContact: builder.mutation({
//       query: values => ({
//         url: `/contacts`,
//         method: 'POST',
//         body: values,
//       }),
//       invalidatesTags: ['contacts'],
//     }),   
//   }),
// });

// export const { useGetContactsQuery,
//     useDeleteContactMutation,
//   useAddContactMutation, } = contactsApi;