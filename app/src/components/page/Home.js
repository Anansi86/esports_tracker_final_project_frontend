import React, { useEffect, useState } from "react"
import AuthService from "../../services/auth.service";
import { useNavigate } from 'react-router-dom';
import { useGlobalState } from "../../context/GlobalState";
import jwtDecode from "jwt-decode";
import { Link } from "react-router-dom";
import Carousel from "../Carousel";
import request from "../../services/api.request";

const Home = () => {
  let navigate = useNavigate();

  const [ state, dispatch ] = useGlobalState();
  const [matches, setMatches] = useState([])

  useEffect(() => {
    async function getData() {
      const response = await request({
        method: "GET",
        url: "Match/"
      });
      console.log(response)
      setMatches(response.data)
    }
    getData()
  },[])

  return (
    <div className="row">
    <div className="col-sm-4">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">login</h5>
          <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
          <p></p>
          <Link to="/Login" className="btn btn-primary">Click Here</Link>
        </div>
      </div>
    </div>
    <div className="col-sm-4">
    <Carousel />
    </div>
    <div className="col-sm-4">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">New User</h5>
          <p className="card-text">{JSON.stringify(matches.length ? matches[0].team1 : "")}</p>
          <a href="#" className="btn btn-primary">Register</a>
        </div>
      </div>
    </div>
  </div>
  )

}

export default Home