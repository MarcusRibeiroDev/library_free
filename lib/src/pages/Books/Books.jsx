// *** Filtragem com categorias e conversão da pesquisa small case

// CSS
import './Books.scss';

// Hooks
import { Link } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';

// Context
import { BooksContext } from '../../context/BookProvider';

const Books = () => {
  const { booksData } = useContext(BooksContext); // Conteúdo original do firebase
  const [newBooksData, setNewBooksData] = useState(); // Conteúdo filtrado
  const [inputSearch, setInputSearch] = useState('');
  const [invalidSearch, setInvalidSearch] = useState(false);

  const filterCard = (el) => {
    if (!el) {
      return booksData;
    } else {
      if (booksData.filter((b) => b.title.includes(el)).length > 0) {
        setInvalidSearch(false);
        return booksData.filter((b) => b.title.includes(el));
      } else {
        setInvalidSearch(true);
        return;
      }
    }
  };

  useEffect(() => {
    if (booksData) {
      setNewBooksData(filterCard(inputSearch));
      console.log(newBooksData);
    }
  }, [inputSearch]);

  return (
    <div className="screen container bg-danger d-flex flex-column justify-content-around">
      <div className="row bg-warning">
        <div className="tags d-flex flex-wrap justify-content-between text-center">
          <a href="#" className="col-2 col-md-1 bg-light mx-2 p-2 mb-1">
            Literatura
          </a>
          <a href="#" className="col-2 col-md-1 bg-light mx-2 p-2 mb-1">
            Infantil
          </a>
          <a href="#" className="col-2 col-md-1 bg-light mx-2 p-2 mb-1">
            Biologia
          </a>
          <a href="#" className="col-2 col-md-1 bg-light mx-2 p-2 mb-1">
            História
          </a>
          <a href="#" className="col-2 col-md-1 bg-light mx-2 p-2 mb-1">
            Ficcão
          </a>
          <a href="#" className="col-2 col-md-1 bg-light mx-2 p-2 mb-1">
            HISTORIA
          </a>
        </div>
      </div>

      <div className="cards-container-p">
        <div className="tools row bg-dark justify-content-between mb-5">
          <div className="d-flex col-5 bg-primary" role="search">
            <input
              className="form-control p-3"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={inputSearch}
              onChange={(e) => setInputSearch(e.target.value)}
            />
            <button className="btn btn-outline-danger" type="submit">
              Search
            </button>
          </div>
          <div className="dropdown col-5 bg-success">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Ordenar
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  Alfabética A-Z
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Mais novos
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Mais antigos
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="cards-container bg-warning d-flex flex-wrap justify-content-between">
          {booksData &&
            !invalidSearch &&
            (newBooksData !== undefined && newBooksData.length > 0 ? newBooksData : booksData).map(
              (card) => (
                <div className="card col-3 mx-3" key={card.id}>
                  <img src={card.image} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{card.title}</h5>
                    <p className="card-text">{card.description}</p>
                    <Link to={`/books/${card.id}`} className="btn btn-primary">
                      Go somewhere
                    </Link>
                  </div>
                </div>
              )
            )}
          {invalidSearch && <div>Pesquisa inválida</div>}
        </div>
      </div>

      <div className="pagination bg-info d-flex justify-content-center">
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            <li className="page-item">
              <a className="page-link" href="#">
                Previous
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Books;
