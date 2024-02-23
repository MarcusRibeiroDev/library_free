// CSS
import './Home.scss';

import img1 from '../../assets/img/img1.jpg';
import img2 from '../../assets/img/img2.jpeg';
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
          <div className="carousel-caption bg-black">
            <h5 className="display-1">First slide label</h5>
            <p className="display-5">
              Some representative placeholder content for the first slide.
            </p>
            <a href="">Acesse aqui</a>
          </div>
        </div>
        <div className="carousel-item">
          <img src={img2} className="slide d-block w-100" alt="..." />
          <div className="carousel-caption bg-black">
            <h5 className="display-1">First slide label</h5>
            <p className="display-5">
              Some representative placeholder content for the first slide.
            </p>
            <a href="">Acesse aqui</a>
          </div>
        </div>
        <div className="carousel-item">
          <img src={img3} className="slide d-block w-100" alt="..." />
          <div className="carousel-caption bg-black">
            <h5 className="display-1">First slide label</h5>
            <p className="display-5">
              Some representative placeholder content for the first slide.
            </p>
            <a href="">Acesse aqui</a>
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
