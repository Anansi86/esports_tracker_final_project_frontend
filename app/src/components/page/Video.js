import React, { useState } from "react"
import { useNavigate } from 'react-router-dom';
import { useGlobalState } from "../../context/GlobalState";
import { Link } from "react-router-dom";

const Video = () => {
  let navigate = useNavigate();

  const [ state, dispatch ] = useGlobalState();

  return (
    <div className="row">
    <div className="col-sm-6">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{state.currentUser.username}</h5>
          <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
          <p></p>
          <Link to="/Login" className="btn btn-primary">Click Here</Link>
        </div>
      </div>
    </div>
    <div className="col-sm-6">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">New User</h5>
          <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
          <a href="#" className="btn btn-primary">Register</a>
        </div>
      </div>
    </div>
  </div>
  )

}

export default Video