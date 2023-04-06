import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
  const links = [
    { path: '/', text: 'Books' },
    { path: 'categories', text: 'Categories' },
  ];
  return (
    <nav className="navigationMenu">
      <div>
        <p>BookStore CMS</p>
        <ul>
          {links.map((link) => (
            <li key={link.text}>
              <NavLink to={link.path} className="navLink">
                {link.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <FontAwesomeIcon icon={faUser} className="userIcon" />
    </nav>
  );
};

export default NavBar;
