import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/bookSlice';

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispach = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!title || !author) {
      return;
    }
    const newBook = {
      id: uuidv4(),
      title,
      author,
    };
    dispach(addBook(newBook));
    setTitle('');
    setAuthor('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Book title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={(event) => setAuthor(event.target.value)}
      />
      <button type="submit">ADD BOOK</button>
    </form>
  );
};

export default AddBook;
