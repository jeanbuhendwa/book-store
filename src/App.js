import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/home';
import Categories from './components/categories';
import Layout from './components/Layout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="categories" element={<Categories />} />
      </Route>
    </Routes>
  );
}

export default App;
