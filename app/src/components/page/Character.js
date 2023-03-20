import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import request from "../../services/api.request";
import _ from "lodash";
import "bootstrap/dist/js/bootstrap.js";
import Team from "./Team";

const Player = () => {
  const [hero, setHero] = useState({});
  //const [ player, setPlayer] = useState({});

  let { id } = useParams();
  //const list = [];

  useEffect(() => {
    async function getData() {
      const responseHero = await request({
        method: "GET",
        url: "Hero/" + id + "/",
      });

      setHero(responseHero.data);
      console.log(responseHero.data);
    }
    getData();
  }, []);

  return (
    <div className="row">
      <div className="col-sm-6">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{hero.hero_name}</h5>
            <img className="player-image" src={hero.character_img}></img>
          </div>
        </div>
      </div>
      <div className="col-sm-6">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Name</h5>
            <p>{hero.name}</p>
            <h5>{hero.player_num}</h5>
            <h5 className="card-text">Main Attack</h5>
            <p>{hero.main_attack}</p>
            <h5 className="card-text">Special Attack</h5>
            <p>{hero.special_attack}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
