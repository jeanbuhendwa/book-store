import { NavLink } from 'react-router-dom';

const NavBar = () => {
  const links = [
    { path: '/', text: 'Books' },
    { path: 'categories', text: 'Categories' },
  ];
  return (
    <nav>
      <p>BookStore CMS</p>
      <ul>
        {links.map((link) => (
          <li key={link.text}>
            <NavLink to={link.path}>{link.text}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
