import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  bookCategories: [],
};

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    getStatus: (state) => ({
      ...state,
      bookCategories: 'Under Construction',
    }),
  },
});

export const { getStatus } = categorySlice.actions;
export default categorySlice;
