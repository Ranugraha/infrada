import { Link } from 'react-router-dom';
import '../../styles/variables.scss';
import './navbar.scss';
import { DropdownSvg } from '../../assets/Svgs';

const menuLink = [
  {
    id: 1,
    name: 'Головна',
    Link: '/',
    dropdown: '',
  },
  {
    id: 2,
    name: 'Про нас',
    Link: '/aboutUs',
    dropdown: '',
  },
  {
    id: 3,
    name: 'Аналітика',
    Link: '/',
    dropdown: '',
  },
  {
    id: 4,
    name: 'експерти',
    Link: '/expert',
    dropdown: '',
  },
  {
    id: 5,
    name: 'Відео',
    Link: '/',
    dropdown: '',
  },
  {
    id: 6,
    name: 'Напрямки Діяльності',
    Link: '/blog',
    dropdown: <DropdownSvg />,
  },
];

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <Link to="/home" className="">
          <img src="logo.svg" alt="" />
        </Link>
        <div className="menus">
          {menuLink.map((listItem) => (
            <Link to={listItem.Link} key={listItem.id} className="menu">
              {listItem.name}
              {listItem.dropdown}
            </Link>
          ))}
          <div className="dropdown">
            <a>coba</a>
            <div className="dropdownContent">
              <Link to="/">a</Link>
              <Link to="/">b</Link>
            </div>
          </div>
        </div>
        <div className="navButton">
          <button className="buttonLanguage">UA</button>
          <button className="buttonPrimary">
            <Link to="/login/register">Приєднатися</Link>
          </button>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
