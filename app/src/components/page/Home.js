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
    <div className="container">
      <div className="row">
        <div className="col-3">
          <img src="https://static.wikia.nocookie.net/overwatch_gamepedia/images/3/3b/Reinhardt-ow2-portrait.png"></img>
        </div>
        <div className="col w-100" id="carousel"><Carousel /></div>
        <div className="col-3"></div>
      </div>
    </div>
    )
  }
  
  export default Home
  