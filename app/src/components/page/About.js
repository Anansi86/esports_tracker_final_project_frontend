import React, { useState } from "react"
import AuthService from "../../services/auth.service";
import { useNavigate } from 'react-router-dom';
import { useGlobalState } from "../../context/GlobalState";
import jwtDecode from "jwt-decode";
import { Link } from "react-router-dom";

const About = () => {
  let navigate = useNavigate();

  const [ state, dispatch ] = useGlobalState();

  return (
    <div className="row">
    <div className="col-sm-6">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">the about page</h5>
          <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
          <p></p>
          <Link to="/Login" className="btn btn-primary">Click Here</Link>
        </div>
      </div>
    </div>
    <div className="col-sm-6">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">this is a test</h5>
          <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
          <a href="#" className="btn btn-primary">Register</a>
        </div>
      </div>
    </div>
  </div>
  )

}

export default About