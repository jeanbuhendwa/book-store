import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import AddBook from './bookForm';
import { fetchBook, deleteBook, removeBook } from '../redux/books/bookSlice';

const HomePage = () => {
  const books = useSelector((state) => state.book.books);
  const isLoading = useSelector((state) => state.book.isLoading);
  const error = useSelector((state) => state.book.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBook());
  }, [dispatch]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return (
      <p>
        Error:
        {error}
      </p>
    );
  }
  const handelRemove = (bookId) => {
    dispatch(removeBook(bookId));
    dispatch(deleteBook(bookId));
  };
  return (
    <>
      <main>
        <section>
          <h2>Books</h2>
          <ul>
            {books.map((book) => (
              <li key={book.item_id}>
                <h3>{book.title}</h3>
                <p>{book.author}</p>
                <button
                  type="button"
                  onClick={() => handelRemove(book.item_id)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </section>
        <div>
          <AddBook />
        </div>
      </main>
    </>
  );
};

export default HomePage;
