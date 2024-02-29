// CSS
import './BookDetails.scss';

// Images
import brazilFlag from '../../assets/img/Brazil-flag.png';
import usaFlag from '../../assets/img/USA-flag.png';

// Hooks
import { useState, useContext } from 'react';
import { useParams } from 'react-router-dom';

// Context
import { BooksContext } from '../../context/BookProvider';

function BookDetails() {
  const { booksData } = useContext(BooksContext);
  const [audioBook, setAudioBook] = useState(false);
  const [videoLink, setVideoLink] = useState();
  const { id } = useParams();

  const book = booksData.find((book) => book.id == id);

  return (
    <>
      {book && (
        <div className="container d-flex justify-content-center align-items-center bg-secondary-subtle position-relative">
          <div className="row container-custom">
            <div className="col-md-6 col-12 d-flex justify-content-start align-items-center flex-column p-5">
              <div>
                <h2>{book.title}</h2>
                <p>{book.resume}</p>
                <h3>{book.author}</h3>
              </div>
            </div>
            <div className="col-md-6 col-12 d-flex justify-content-center align-items-center flex-column">
              <div className="p-5">
                <img className="book-img" src={book.image} alt="" />
                <div className="d-flex justify-content-between">
                  <div className="book-tools">
                    <img
                      src="https://cdn.icon-icons.com/icons2/2036/PNG/512/blank_file_page_empty_document_icon_124196.png"
                      alt=""
                      onClick={() => {
                        setAudioBook(!audioBook);
                        setVideoLink(book.linkBrVideo);
                      }}
                    />
                    <img
                      src="https://cdn.icon-icons.com/icons2/2036/PNG/512/blank_file_page_empty_document_icon_124196.png"
                      alt=""
                      onClick={() => {
                        setAudioBook(!audioBook);
                        setVideoLink(book.linkEnVideo);
                      }}
                    />
                    <a href={book.linkBrPdf} target="_blank">
                      <img
                        src="https://cdn.icon-icons.com/icons2/2036/PNG/512/blank_file_page_empty_document_icon_124196.png"
                        alt=""
                      />
                    </a>
                    <a href={book.linkEnPdf} target="_blank">
                      <img
                        src="https://cdn.icon-icons.com/icons2/2036/PNG/512/blank_file_page_empty_document_icon_124196.png"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="book-flags">
                    <img src={brazilFlag} alt="" />
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
          {audioBook && (
            <div className="book-video">
              <div>
                {/* Close button */}
                <button className="btn btn-warning" onClick={() => setAudioBook(!audioBook)}>
                  X
                </button>
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
