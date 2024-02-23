// CSS
import './BookDetails.scss';

// Images
import brazilFlag from '../../assets/img/Brazil-flag.png';
import usaFlag from '../../assets/img/USA-flag.png';
import { useState } from 'react';

function BookDetails() {
  const [audioBook, setAudioBook] = useState(false);

  return (
    <div className="container d-flex justify-content-center align-items-center bg-secondary-subtle position-relative">
      <div className="row container-custom">
        <div className="col-md-6 col-12 d-flex justify-content-start align-items-center flex-column p-5">
          <div>
            <h2>O Pequeno Príncipe</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the standard dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book. It has survived not only
              five centuries, but also the leap into electronic typesetting, remaining essentially
              unchanged. It was popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <h3>Antoine de Saint-Exupéry</h3>
          </div>
        </div>
        <div className="col-md-6 col-12 d-flex justify-content-center align-items-center flex-column">
          <div className="p-5">
            <img
              className="book-img"
              src="https://www.garamond.com.br/wp-content/uploads/2019/02/Capa_principe_sites.jpg"
              alt=""
            />
            <div className="d-flex justify-content-between">
              <div className="book-tools">
                <i className="bi bi-play-circle-fill" onClick={() => setAudioBook(!audioBook)}></i>
                <img
                  src="https://cdn.icon-icons.com/icons2/2036/PNG/512/blank_file_page_empty_document_icon_124196.png"
                  alt=""
                />
                <img
                  src="https://cdn.icon-icons.com/icons2/2036/PNG/512/blank_file_page_empty_document_icon_124196.png"
                  alt=""
                />
              </div>
              <div className="book-flags">
                <img src={brazilFlag} alt="" />
                <img src={usaFlag} alt="" />
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
              src="https://www.youtube.com/embed/Uyx5Lzn1yAs?si=KJ0vPauMR0N4nUDj"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}

export default BookDetails;
