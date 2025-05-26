import React from 'react';
import Product from './Product';
// import './About.css';
// import Header from './Header';

const Home = () => {
  const handleGetStartedClick = () => {
    const productsSection = document.getElementById('productsSection');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='about'>
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
        </div>
        <div className="carousel-inner" height="800px">
          <div className="carousel-item active">
            <img src="./home5.jpg" className="d-block w-100" alt="IPhone" height="700px" />
            <div className="carousel-caption d-none d-md-block"style={{paddingBottom: "250px", paddingLeft: "100px"}}>
              <h5 style={{ fontSize: "1cm" }}>Check out our Popular Editions</h5>
              <br/>
              <button className="btn btn-primary" onClick={handleGetStartedClick}>Get Started</button>
            </div>
          </div>
          <div className="carousel-item">
            <img src="./home2.jpg" className="d-block w-100" alt="IPhone" height="700px" />
          </div>
          <div className="carousel-item">
            <img src="/home3.jpg" className="d-block w-100" alt="IPhone" height="700px" />
          </div>
          <div className="carousel-item">
            <img src="/home9.jpg" className="d-block w-100" alt="IPhone" height="700px" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div id="productsSection">
        <Product />
      </div>
    </div>
  );
};

export default Home;
