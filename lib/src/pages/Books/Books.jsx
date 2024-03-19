// CSS
import './Books.scss';

// Hooks
import { Link } from 'react-router-dom';
import { useContext, useEffect, useState, useRef } from 'react';

// Context
import { BooksContext } from '../../context/BookProvider';

const Books = () => {
  const { booksData } = useContext(BooksContext); // Conteúdo original do firebase

  const [originalBooksData, setOriginalBooksData] = useState([]);
  const [originalSortType, setOriginalSortType] = useState('');
  const [newBooksData, setNewBooksData] = useState(); // Conteúdo filtrado
  const [inputSearch, setInputSearch] = useState('');
  const [invalidSearch, setInvalidSearch] = useState(false);
  const [sortType, setSortType] = useState('');
  const [currentPage, setCurrentPage] = useState(0);
  const [booksRendered, setBooksRendered] = useState([]);

  const renderBooks = (books) => {
    const startBook = currentPage * 6;
    const endBook = startBook + 6;

    return (books !== undefined && books.length > 0 ? books : booksData).slice(startBook, endBook);
  };

  const textInput = useRef();

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
      setOriginalBooksData(booksData);
      setNewBooksData(booksData);
      setOriginalSortType(sortType);
      if (inputSearch.length === 0) {
        setSortType('default');
      }
    }
  }, [booksData]);

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

  const ordenarPadrao = () => {
    setInputSearch('');
    setSortType(originalSortType);
    setNewBooksData([...originalBooksData]);
  };

  useEffect(() => {
    if (booksData.length > 0) {
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
      } else if (sortType === 'default') {
        ordenarPadrao();
      }
    }
  }, [sortType, originalBooksData]); // Effect que observa as ordens

  useEffect(() => {
    // Atualizar a lista de livros renderizados sempre que a página atual mudar ou os livros filtrados ou a busca inválida mudar
    setBooksRendered(renderBooks(newBooksData));
  }, [currentPage, newBooksData, invalidSearch]);

  return (
    <div className="screen d-flex flex-column justify-content-around">
      <div className="cards-container-p">
        <div className="tools d-flex justify-content-center align-items-center  p-4 roboto-medium">
          <div className="d-flex w-75" role="search">
            <input
              className="form-control input-custom"
              type="search"
              placeholder="Pesquisar..."
              aria-label="Search"
              ref={textInput}
              value={inputSearch}
              onChange={(e) => setInputSearch(e.target.value)}
            />
          </div>
          <div className="dropdown">
            <button
              type="button"
              className="btn btn-outline-warning dropdown-toggle btn-custom"
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
              <li>
                <button
                  className={`dropdown-item ${sortType === 'default' ? 'activeSort' : ''}`}
                  onClick={() => {
                    setSortType('default');
                  }}
                >
                  Padrão
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="container">
          <div className="row">
            {newBooksData &&
              !invalidSearch &&
              (booksRendered.length > 0 ? booksRendered : booksData.slice(0, 6)).map(
                (card, index) => (
                  <div key={index} className="col-lg-4 col-md-6 col-sm-6 div-custom">
                    <div className="card card-custom">
                      <img src={card.image} className="card-img-top " alt="..." />
                      <div className="card-body p-0">
                        <h5 className="card-title">{card.title}</h5>
                        <h6 className="card-text text-danger">{card.category}</h6>
                        <Link to={`/books/${card.id}`} className="btn btn-primary">
                          Detalhes
                        </Link>
                      </div>
                    </div>
                  </div>
                )
              )}
            {invalidSearch && <div className="col text-white">Pesquisa inválida</div>}
          </div>
        </div>
      </div>

      <div className="pagination d-flex justify-content-center roboto-medium p-4">
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            <li className="page-item">
              <button
                className="page-link"
                onClick={() => setCurrentPage(currentPage > 0 ? currentPage - 1 : currentPage)}
              >
                Anterior
              </button>
            </li>
            <li className="page-item">
              <button
                className="page-link"
                onClick={() => setCurrentPage(currentPage > 1 ? currentPage : currentPage + 1)}
              >
                Próximo
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Books;
