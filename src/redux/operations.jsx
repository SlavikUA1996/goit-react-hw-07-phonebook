import { createAsyncThunk} from '@reduxjs/toolkit/';
import axios from 'axios';

axios.defaults.baseURL = 'https://64b7827b21b9aa6eb07833af.mockapi.io';

export const contactsApi = createAsyncThunk(
  'contacts/fetchAll', 
  async (_, thunkAPI) => {
    try {
        const response = await axios.get('/contacts');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContacts = createAsyncThunk(
  'contacts/addContacts',
 async (contact, thunkAPI) => {
      try {
          const response = await axios.post('/contacts', contact);
      return response.data;
      } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContacts = createAsyncThunk(
  'contacts/deleteContacts', 
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const toggleCompleted = createAsyncThunk(
  'contacts/toggleCompleted',
  async (contact, thunkAPI) => {
    try {
      const response = await axios.put(`/contacts/${contact.id}`, {
        completed: !contact.completed,
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);