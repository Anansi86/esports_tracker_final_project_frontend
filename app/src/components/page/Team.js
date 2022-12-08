import React, { useEffect, useState } from "react"
// import { useNavigate } from 'react-router-dom';
// import { useGlobalState } from "../../context/GlobalState";
import { Link, useParams } from "react-router-dom";
import request from "../../services/api.request";

const Team = () => {

  const [ team, setTeam ] = useState({});

  let { id } = useParams();
    
    
  useEffect(() => {
    async function getData() {
      const responseTeam = await request({
        method: "GET",
        url: "Team/" + id + "/",
      });
      
      
      setTeam(responseTeam.data)
      
    }
    getData()
  },[])

  // let navigate = useNavigate();

  // const [ state, dispatch ] = useGlobalState();
  return (
    <div className="row">
    <div className="col-sm-6">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{team.name}</h5>
          <p></p>
          <img className="team_icon" href="Home" src={team.icon} alt="team_icon" />
        </div>
      </div>
    </div>
  </div>
  )
}


export default Team;