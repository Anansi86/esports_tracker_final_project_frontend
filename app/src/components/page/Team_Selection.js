import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import request from "../../services/api.request";


const Team_Selection = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    async function getData() {
      const responseTeam = await request({
        method: "GET",
        url: "Team/",
      });

      setTeams(responseTeam.data);
      console.log(responseTeam.data)
    }
    getData();
    
  }, []);
  
  return (
    <div className="container">
      <div className="row">
        {teams.map((team) => {
          return (
            <div className="col-3">
              <div className="card ">
                <div className="card-body">
                  <h5 className="card-title">{team.name}</h5>
                    <Link to={"/Team/" + team.id}>
                    <img className="team_icon" href="Home" src={team.icon} alt="team_icon" />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Team_Selection;
