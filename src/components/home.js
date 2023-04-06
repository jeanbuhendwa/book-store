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
          <ul className="bookList">
            {books.map((book) => (
              <li key={book.item_id}>
                <div className="bookInfo">
                  <div>
                    <p className="category">Economy</p>
                    <h3>{book.title}</h3>
                    <p>{book.author}</p>
                  </div>
                  <div className="btns">
                    <button type="button">Comment</button>
                    <button
                      type="button"
                      onClick={() => handelRemove(book.item_id)}
                    >
                      Remove
                    </button>
                    <button type="button">Edit</button>
                  </div>
                </div>
                <div className="bookProgress">
                  <div className="Oval" />
                  <div>
                    <h4>64 %</h4>
                    <p>Completed</p>
                  </div>
                </div>
                <div className="updateProgress">
                  <p className="currChap">Current Chapter</p>
                  <p className="chapter">Chapter 17</p>
                  <button type="button" className="btnProgress">
                    Update progress
                  </button>
                </div>
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
