// CSS
import './Navbar.scss';

// Hooks
import { Link } from 'react-router-dom';

// Images
import logo from '../../assets/img/Logo.png';

const Navbar = () => {
  return (
    <header>
      <nav className="navbar container-fluid roboto-regular">
        <div className="container-md">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="Logo" />
          </Link>
          <ul className="navbar-nav d-flex flex-row align-items-center ">
            <li className="nav-item li-custom">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item li-custom">
              <Link className="nav-link" to="books">
                Livros
              </Link>
            </li>
            <li className="nav-item li-custom">
              <Link className="nav-link" to="about">
                Sobre
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
