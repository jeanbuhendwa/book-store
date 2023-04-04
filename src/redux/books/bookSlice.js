import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  bookItem: [
    {
      id: 'item1',
      title: 'The Great Gatsby',
      author: 'John Smith',
      category: 'Fiction',
    },
    {
      id: 'item2',
      title: 'Anna Karenina',
      author: 'Leo Tolstoy',
      category: 'Fiction',
    },
    {
      id: 'item3',
      title: 'The Selfish Gene',
      author: 'Richard Dawkins',
      category: 'Nonfiction',
    },
  ],
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
