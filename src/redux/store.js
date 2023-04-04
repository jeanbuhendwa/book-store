import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './books/bookSlice';
import categoryReducer from './categories/categoriesSlice';

const Store = configureStore({
  reducer: {
    book: bookReducer,
    category: categoryReducer,
  },
});

export default Store;
