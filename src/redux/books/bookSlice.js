import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const api = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/';
const apiID = 'xiNw7kmughOF5lQkyPnN';

export const fetchBook = createAsyncThunk('book/fetchBook', async () => {
  try {
    const response = await axios.get(`${api}/${apiID}/books`);
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
});

export const postBook = createAsyncThunk('book/postBook', async (book) => {
  try {
    const response = await axios.post(`${api}/${apiID}/books`, book);
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
});

export const deleteBook = createAsyncThunk(
  'book/deleteBook',
  async (bookId) => {
    try {
      const response = await axios.delete(`${api}/${apiID}/books/${bookId}`);
      return response.data;
    } catch (error) {
      return Promise.reject(error);
    }
  },
);

const initialState = {
  books: [],
  isLoading: true,
  error: undefined,
};

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    removeBook: (state, action) => {
      const itemId = action.payload;
      return {
        ...state,
        books: state.books.filter((book) => book.item_id !== itemId),
      };
    },
    prepare: (bookId) => ({ payload: bookId }),
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBook.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(fetchBook.fulfilled, (state, action) => {
        const bookList = action.payload;
        const newBookList = [];
        Object.keys(bookList).forEach((book) => newBookList.push({
          item_id: book,
          title: bookList[book][0].title,
          author: bookList[book][0].author,
        }));
        return {
          ...state,
          books: newBookList,
          isLoading: false,
        };
      })
      .addCase(fetchBook.rejected, (state) => ({
        ...state,
        isLoading: false,
      }))
      .addCase(postBook.pending, (state) => ({
        ...state,
        isBookAdded: false,
      }))
      .addCase(postBook.fulfilled, (state) => ({
        ...state,
        isBookAdded: true,
      }))
      .addCase(deleteBook.pending, (state) => ({
        ...state,
        idBookDeleted: false,
      }))
      .addCase(deleteBook.fulfilled, (state) => ({
        ...state,
        idBookDeleted: true,
      }));
  },
});

export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;
