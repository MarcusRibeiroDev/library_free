// Importações de estilos e recursos
import './BookDetails.scss';
import brazilFlag from '../../assets/img/Brazil-flag.png';
import usaFlag from '../../assets/img/USA-flag.png';
import videoBr from '../../assets/img/videoBr-removebg-preview.png';
import videoEn from '../../assets/img/videoEn-removebg-preview.png';
import pdfBr from '../../assets/img/pdfBr-removebg-preview.png';
import pdfEn from '../../assets/img/pdfEn-removebg-preview.png';

// Hooks
import { useState, useContext } from 'react';
import { useParams } from 'react-router-dom';

// Contexto
import { BooksContext } from '../../context/BookProvider';

// Componente para exibir detalhes do livro
function BookDetails() {
  // Estado para controlar a exibição do vídeo do livro
  const [audioBook, setAudioBook] = useState(false);

  // Estado para armazenar o link do vídeo
  const [videoLink, setVideoLink] = useState();

  // Parâmetros da URL
  const { id } = useParams();

  // Contexto de livros
  const { booksData } = useContext(BooksContext);

  // Encontrar o livro correspondente ao ID fornecido
  const book = booksData.find((book) => book.id == id);

  // Retorno do componente
  return (
    <>
      {book && (
        // Container principal
        <div className="d-flex justify-content-center align-items-center-subtle position-relative div-custom-book-detail roboto-medium">
          <div className="row container-custom">
            {/* Coluna para os detalhes do livro */}
            <div className="col-md-6 col-12 d-flex justify-content-start align-items-center flex-column p-5">
              <div>
                {/* Título, resumo e autor do livro */}
                <h2 className="roboto-medium-italic">{book.title}</h2>
                <p>{book.resume}</p>
                <h3 className="roboto-medium-italic">{book.author}</h3>
              </div>
            </div>
            {/* Coluna para a imagem do livro e ferramentas */}
            <div className="col-md-6 col-12 d-flex justify-content-center align-items-center flex-column">
              <div className="p-5">
                {/* Imagem do livro */}
                <img className="book-img" src={book.image} alt="" />
                <div className="d-flex justify-content-between">
                  {/* Ferramentas do livro (vídeo e PDF) */}
                  <div className="book-tools">
                    {/* Botão para o vídeo em português */}
                    <img
                      src={videoBr}
                      alt=""
                      onClick={() => {
                        setAudioBook(!audioBook);
                        setVideoLink(book.linkBrVideo);
                      }}
                    />
                    {/* Botão para o vídeo em inglês, se disponível */}
                    {book.language.length > 1 && (
                      <>
                        <img
                          src={videoEn}
                          alt=""
                          onClick={() => {
                            setAudioBook(!audioBook);
                            setVideoLink(book.linkEnVideo);
                          }}
                        />
                      </>
                    )}
                    {/* Link para o PDF em português */}
                    <a href={book.linkBrPdf} target="_blank">
                      <img src={pdfBr} alt="" />
                    </a>
                    {/* Link para o PDF em inglês, se disponível */}
                    {book.language.length > 1 && (
                      <>
                        <a href={book.linkEnPdf} target="_blank">
                          <img src={pdfEn} alt="" />
                        </a>
                      </>
                    )}
                  </div>
                  {/* Bandeiras para indicar idioma */}
                  <div className="book-flags">
                    <img src={brazilFlag} alt="" />
                    {/* Exibir bandeira dos EUA se o livro estiver em inglês */}
                    {book.language.length > 1 && (
                      <>
                        <img src={usaFlag} alt="" />
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Modal para exibir o vídeo do livro */}
          {audioBook && (
            <div className="book-video">
              <div>
                {/* Botão para fechar o modal */}
                <button className="btn btn-warning" onClick={() => setAudioBook(!audioBook)}>
                  X
                </button>
                {/* Iframe para exibir o vídeo */}
                <iframe
                  className=""
                  src={videoLink}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                ></iframe>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default BookDetails;
