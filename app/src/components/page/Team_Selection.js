import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalState } from "../../context/GlobalState";
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
    }
    getData();
  }, []);

  return (
    <div className="container">
      <div className="row">
        {teams.map((team) => {
          return (
            <div className="col-3">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{team.name}</h5>
                  <img className="team_icon" src={team.icon} alt="team_icon" />
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
