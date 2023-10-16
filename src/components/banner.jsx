import React from "react";
import bannerHero from "../assets/women_smile.jpg";

const Banner = () => {
  return (
    <>
      <div className="container">
      <div className="hero border-1 pb-3">
        <div className="card bg-dark text-white border-0 mx-3">
          <img
            className="card-img"
            src={bannerHero}
            alt="Card"
            height={600}
          />
          <div className="card-img-overlay d-flex align-items-center">
            <div className="container">
              <h3 className="card-title fs-3 text fw-bold">New Season Arrivals</h3>
              <p className="card-text fs-6 d-none d-sm-block ">
                This is a wider card with supporting text below as a natural<br />
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Banner;
