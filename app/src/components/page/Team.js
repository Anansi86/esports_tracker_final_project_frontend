import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import request from "../../services/api.request";
import _ from "lodash";
import 'bootstrap/dist/js/bootstrap.js';

const Team = () => {
  const [team, setTeam] = useState({});
  //const [ player, setPlayer] = useState({});

  let { id } = useParams();
  //const list = [];

  useEffect(() => {
    async function getData() {
      const responseTeam = await request({
        method: "GET",
        url: "Team/" + id + "/",
      });

      setTeam(responseTeam.data);
    }
    getData();
  }, []);

  //const list = player.map((item) => <PlayerList item={item} />);

  const playerList = team.players?.map((tm) => {
    return <Link to={'/player/' + tm.id} key={tm.id} className="row">{tm.player_name}</Link>;
  });

  return (
    <div className="row">
      <div className="col-sm-6">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{team.name}</h5>
            <img
              className="team_icon"
              href="Home"
              src={team.icon}
              alt="team_icon"
            />
          </div>
        </div>
      </div>
      <div className="col-sm-6">
      <div className="list-group">
        <button type="button" className="list-group-item list-group-item-action">
        {playerList}
        </button>
      </div>   
      </div>
  </div>
  );
};

export default Team;
