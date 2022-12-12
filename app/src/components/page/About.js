import React, { useState } from "react"
import AuthService from "../../services/auth.service";
import { useNavigate } from 'react-router-dom';
import { useGlobalState } from "../../context/GlobalState";
import jwtDecode from "jwt-decode";
import { Link } from "react-router-dom";

const About = () => {
  // let navigate = useNavigate();

  // const [ state, dispatch ] = useGlobalState();

  return (
    <div className="row">
    <div className="col-sm-6">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">About OverWatch</h5>
          <p className="card-text">Overwatch 2 is a free-to-play, team-based action game set in the optimistic future, 
          where every match is the ultimate 5v5 battlefield brawl. 
          Play as a time-jumping freedom fighter, a beat-dropping battlefield DJ, 
          or one of over 30 other unique heroes as you battle it out around the globe.</p>
          <p></p>
          <Link to="/Login" className="btn btn-primary">Click Here</Link>
        </div>
      </div>
    </div>
    <div className="col-sm-6">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Characters</h5>
          <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
          <a href="#" className="btn btn-primary">Register</a>
        </div>
      </div>
    </div>
  </div>
  )

}

export default About