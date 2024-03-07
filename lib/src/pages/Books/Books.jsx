// *** Terminar filtragem colocando opçáo de (voltar ao inicial)

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
  const [sortType, setSortType] = useState('');

  const filterCard = (el) => {
    if (!el) {
      setInvalidSearch(false);
      return booksData;
    } else {
      if (booksData.filter((b) => b.title.toLowerCase().includes(el.toLowerCase())).length > 0) {
        setInvalidSearch(false);
        return booksData.filter((b) => b.title.toLowerCase().includes(el.toLowerCase()));
      } else {
        setInvalidSearch(true);
        return;
      }
    }
  };

  useEffect(() => {
    if (booksData) {
      setNewBooksData(filterCard(inputSearch));
    }
  }, [inputSearch]);

  const ordenarPorTitulo = (listaDeObjetos) => {
    return listaDeObjetos.sort((a, b) => {
      const titleA = a.title.toUpperCase();
      const titleB = b.title.toUpperCase();

      if (titleA < titleB) {
        return -1;
      }
      if (titleA > titleB) {
        return 1;
      }
      return 0;
    });
  }; // Ordenação por ordem alfabética

  const ordenarPorNovos = (listaDeObjetos) => {
    return listaDeObjetos.sort((a, b) => b.year - a.year);
  }; // Ordenação por ordem alfabética

  const ordenarPorVelhos = (listaDeObjetos) => {
    return listaDeObjetos.sort((a, b) => a.year - b.year);
  }; // Ordenação por ordem alfabética

  useEffect(() => {
    if (sortType === 'alfabética') {
      const sortedBooks = ordenarPorTitulo(
        newBooksData !== undefined && newBooksData.length > 0 ? newBooksData : booksData
      );
      setNewBooksData([...sortedBooks]);
    } else if (sortType === 'novos') {
      const sortedBooksNew = ordenarPorNovos(
        newBooksData !== undefined && newBooksData.length > 0 ? newBooksData : booksData
      );
      setNewBooksData([...sortedBooksNew]);
    } else if (sortType === 'velhos') {
      const sortedBooksNew = ordenarPorVelhos(
        newBooksData !== undefined && newBooksData.length > 0 ? newBooksData : booksData
      );
      setNewBooksData([...sortedBooksNew]);
    }
  }, [sortType]); // Effect que observa as ordens

  return (
    <div className="screen container bg-danger d-flex flex-column justify-content-around">
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
                <button
                  className={`dropdown-item ${sortType === 'alfabética' ? 'activeSort' : ''}`}
                  onClick={() => {
                    setSortType('alfabética');
                  }}
                >
                  Alfabética A-Z
                </button>
              </li>
              <li>
                <button
                  className={`dropdown-item ${sortType === 'novos' ? 'activeSort' : ''}`}
                  onClick={() => {
                    setSortType('novos');
                  }}
                >
                  Mais novos
                </button>
              </li>
              <li>
                <button
                  className={`dropdown-item ${sortType === 'velhos' ? 'activeSort' : ''}`}
                  onClick={() => {
                    setSortType('velhos');
                  }}
                >
                  Mais antigos
                </button>
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
                    <h5 className="card-text text-danger">{card.category}</h5>
                    <Link to={`/books/${card.id}`} className="btn btn-primary">
                      Detalhes
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
