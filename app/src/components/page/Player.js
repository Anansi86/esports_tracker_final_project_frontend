import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import request from "../../services/api.request";
import _ from "lodash";
import 'bootstrap/dist/js/bootstrap.js';

const Player = () => {
  
  const [player, setPlayer] = useState({});
  //const [ player, setPlayer] = useState({});

  let { id } = useParams();
  //const list = [];

  useEffect(() => {
    async function getData() {
      const responsePlayer = await request({
        method: "GET",
        url: "Player/" + id + "/",
      });

      setPlayer(responsePlayer.data);
      console.log(responsePlayer.data)

    }
    getData();
  }, []);

    return (
      <div className="row">
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{player.player_name}</h5>
              <img
                className="player-image"
                src={player.pic}
              ></img>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Alias</h5>
              <p>{player.alias_name}</p>
                <h5>{player.player_num}</h5>
              <h5 className="card-text">From:</h5>
              <p>{player.hometown}</p>
            </div>
            <div className="container">
              <div className="row">
                <div className="col">Total Atk</div>
                <div className="col">Total Eliminations</div>
                <div className="col">Total Deaths</div>
              </div>
  
            <div className="row">
              <div className="col">{player.total_damage}</div>
              <div className="col">{player.total_eliminations}</div>
              <div className="col">{player. total_deaths}</div>
            </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default Player