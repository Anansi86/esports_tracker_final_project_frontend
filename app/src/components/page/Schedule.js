import React, { useState } from "react"
import AuthService from "../../services/auth.service";
import { useNavigate } from 'react-router-dom';
import { useGlobalState } from "../../context/GlobalState";
import jwtDecode from "jwt-decode";
import { Link } from "react-router-dom";

const Schedule = () => {
  let navigate = useNavigate();

  const [ state, dispatch ] = useGlobalState();

  return (
    <div classNameNameName="row">
    <div classNameNameName="col-sm-4">
      <div classNameNameName="card">
        <div classNameNameName="card-body">
          <h5 classNameNameName="card-title">login</h5>
          <p classNameNameName="card-text">With supporting text below as a natural lead-in to additional content.</p>
          <p></p>
          <Link to="/Login" classNameNameName="btn btn-primary">Click Here</Link>
        </div>
      </div>
    </div>
    <div classNameNameName="col-sm-4">
      <div classNameNameName="card">
        <div classNameNameName="card-body">
          <h5 classNameNameName="card-title">New User</h5>
          <p classNameNameName="card-text">With supporting text below as a natural lead-in to additional content.</p>
          <a href="#" classNameNameName="btn btn-primary">Register</a>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Schedule