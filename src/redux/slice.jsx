
import { createSlice } from '@reduxjs/toolkit';
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage'; 

export const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    value:'',
  },
  reducers: {
 
    setFilter(state, action) {
      state.value = action.payload;
    },
  },
});

export const { setFilter } = filterSlice.actions;
export const getFilter = state => state.filter.value;

export const filterReduser = filterSlice.reducer;




