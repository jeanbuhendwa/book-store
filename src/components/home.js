import { useDispatch, useSelector } from 'react-redux';
import AddBook from './bookForm';
import { removeBook } from '../redux/books/bookSlice';

const HomePage = () => {
  const books = useSelector((state) => state.book.bookItem);
  const dispach = useDispatch();
  return (
    <>
      <main>
        <section>
          <h2>Books</h2>
          <ul>
            {books.map((book) => (
              <li key={book.id}>
                <p>{book.category}</p>
                <h3>{book.title}</h3>
                <p>{book.author}</p>
                <button
                  type="button"
                  onClick={() => dispach(removeBook(book.id))}
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
