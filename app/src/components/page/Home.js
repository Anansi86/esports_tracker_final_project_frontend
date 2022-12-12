import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Carousel from "../Carousel";
import request from "../../services/api.request";
// import AuthService from "../../services/auth.service";
// import { useNavigate } from 'react-router-dom';
// import { useGlobalState } from "../../context/GlobalState";
//import jwtDecode from "jwt-decode";

const Home = () => {
  // let navigate = useNavigate();

  // useEffect(() => {
  //   async function getData() {
  //     const responseMatch = await request({
  //       method: "GET",
  //       url: "Match/",
  //     });
  //     const responseHero = await request({
  //       method: "GET",
  //       url: "Hero/"
  //     });

  //     setMatches(responseMatch.data);
  //     setHeroes(responseHero.data);

  //   }
  //   getData()
  // },[])

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <img
            className="banner"
            src="./images/hero-overwatch.png"
          />
        </div>
      </div>

      <div className="row">
        <div className="col-3">
          <img
            className="rein"
            src="https://static.wikia.nocookie.net/overwatch_gamepedia/images/3/3b/Reinhardt-ow2-portrait.png"
          />
        </div>

        <div className="col w-100 h-100" id="carousel">
          <Carousel />
        </div>

        <div className="col-3">
          <img
            className="tracer"
            src="https://www.kindpng.com/picc/m/12-120331_hots-tracer-002-tracer-overwatch-png-transparent-png.png"
          />
        </div>
      </div>

      {/* 2nd row card elements */}
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Watch on Twitch!</h5>
              <p>
                <img
                  className="homecard"
                  src="https://www.svg.com/img/gallery/the-untold-truth-of-twitch/intro-1526072501.jpg"
                />
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title"> OverWatch League Youtube</h5>
              <p>
                <img
                  className="homecard"
                  src="https://bnetcmsus-a.akamaihd.net/cms/blog_thumbnail/c6/C6KAEFQDUSH51579892313529.png"
                />
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Blizzard's Homepage</h5>
              <p>
                <img
                  className="homecard"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Blizzard_Entertainment_Logo.svg/2560px-Blizzard_Entertainment_Logo.svg.png"
                />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
