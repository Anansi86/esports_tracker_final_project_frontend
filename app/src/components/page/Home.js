import React, { useEffect, useState } from "react"
import AuthService from "../../services/auth.service";
import { useNavigate } from 'react-router-dom';
import { useGlobalState } from "../../context/GlobalState";
//import jwtDecode from "jwt-decode";
import { Link } from "react-router-dom";
import Carousel from "../Carousel";
import request from "../../services/api.request";

const Home = () => {
 // let navigate = useNavigate();

 // const [ state, dispatch ] = useGlobalState();
  const [matches, setMatches] = useState([])
  const [heroes, setHeroes] = useState([])

  useEffect(() => {
    async function getData() {
      const responseMatch = await request({
        method: "GET",
        url: "Match/",
      });
      const responseHero = await request({
        method: "GET",
        url: "Hero/"
      });
      
      setMatches(responseMatch.data);
      setHeroes(responseHero.data);
      
    }
    getData()
  },[])

  return (
    <div className="row">
    <div className="col-sm-4">
    {heroes.map(hero => (
      <div className="card">
        <div className="card-body">
          {/* <h5 className="card-title">login</h5> */}
          <p className="card-text"></p>
          <p></p>
          <img src= {hero.character_img} alt="Character_img" />
        </div>
      </div>
      ))}
    </div>
    <div className="col-sm-4">
    <Carousel />
    </div>
    <div className="col-sm-4">
      {matches.map(match => (
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">New User</h5>
            <p className="card-text">{match.team1.name}</p>
            <a href="#" className="btn btn-primary">Register</a>
          </div>
        </div>
      ))}
    </div>
  </div>
  )

}

export default Home