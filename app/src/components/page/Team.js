import React, { useEffect,useState } from "react"
import { useNavigate } from 'react-router-dom';
import { useGlobalState } from "../../context/GlobalState";
import { Link } from "react-router-dom";


const Team = () => {

  useEffect(() => {
    async function getData() {
      const responseTeam = await request({
        method: "GET",
        url: "Team/",
      });
      
      
      setTeam(responseTeam.data)
      
    }
    getData()
  },[])

  let navigate = useNavigate();

  const [ state, dispatch ] = useGlobalState();
  return (
    <div className="row">
    <div className="col-sm-6">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">login</h5>
          <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
          <p></p>
          <Link to="/Login" className="btn btn-primary">Click Here</Link>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Team;