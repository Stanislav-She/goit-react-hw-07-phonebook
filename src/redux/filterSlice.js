import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    getFilter(_, action) {
      return action.payload;
    },
  },
});

const { actions, reducer } = filterSlice;

export const { getFilter } = actions;

export default reducer;
