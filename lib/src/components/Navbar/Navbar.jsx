// CSS
import './Navbar.scss';

// Hooks
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header>
      <nav className="navbar bg-secondary container-fluid">
        <div className="container-md">
          <Link className="navbar-brand" to="/">
            <img
              src="https://cdn.icon-icons.com/icons2/2036/PNG/512/blank_file_page_empty_document_icon_124196.png"
              alt="Logo"
            />
          </Link>
          <ul className="navbar-nav d-flex flex-row">
            <li className="nav-item active li-custom">
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
