// CSS
import './Home.scss';

import img1 from '../../assets/img/img1.jpg';
import img2 from '../../assets/img/img2.jpg';
import img3 from '../../assets/img/img3.jpg';

function Home() {
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide carousel-fade"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={img1} className="slide d-block w-100" alt="..." />
          <div className="carousel-caption">
            <h5 className="display-1">Acessibilidade</h5>
            <p className="display-5">Leia livros online de maneira gratuita.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={img2} className="slide d-block w-100" alt="..." />
          <div className="carousel-caption">
            <h5 className="display-1">PDFs Digitais</h5>
            <p className="display-5">Alguns livros disponíveis em dois idiomas.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={img3} className="slide d-block w-100" alt="..." />
          <div className="carousel-caption">
            <h5 className="display-1">AudioBooks</h5>
            <p className="display-5">Áudios do YouTube de todos os livros em nosso site.</p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Home;
