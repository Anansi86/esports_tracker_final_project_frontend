import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalState } from "../../context/GlobalState";
import { Link } from "react-router-dom";
import request from "../../services/api.request";
import Footer from "../Footer";

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
                  <Link to="home">
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
