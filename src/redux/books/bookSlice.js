import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  bookItem: [],
};

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addBook: (state, action) => ({
      ...state,
      bookItem: [...state.bookItem, action.payload],
    }),
    removeBook: (state, action) => {
      const bookId = action.payload;
      return {
        ...state,
        bookItem: state.bookItem.filter((item) => item.id !== bookId),
      };
    },
  },
});

export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;
