import React from 'react'
import "../App.css"

const Home = () => {
  return (
    <>
      <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={`${process.env.REACT_APP_IMG_URL3}`} className="d-block w-100 h-90" alt="lp1" style={{ height: "85vh" }} />
          </div>
          <div className="carousel-item">
            <img src={`${process.env.REACT_APP_IMG_URL2}`} className="d-block w-100" alt="lp2" style={{ height: "85vh" }} />
          </div>
          <div className="carousel-item">
            <img src={`${process.env.REACT_APP_IMG_URL4}`} className="d-block w-100" alt="lp3" style={{ height: "85vh" }} />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
        </button>
      </div>
    </>
  )
}

export default Home