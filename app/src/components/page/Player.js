import React, { useState } from "react"
import AuthService from "../../services/auth.service";
import { useNavigate } from 'react-router-dom';
import { useGlobalState } from "../../context/GlobalState";
import jwtDecode from "jwt-decode";
import { Link } from "react-router-dom";

const Player = () => {
  
    return (
      <div className="row">
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Blake Scott</h5>
              <img
                className="player-image"
                src="http://images.blz-contentstack.com/v3/assets/blt321317473c90505c/blt3df8323ae84dfcd3/6273f664ac712c24bbaef8e3/ATL_GATOR_C_22.png"
              ></img>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Alias</h5>
              <p>Gator</p>
              <h5>#1</h5>
              <h5 className="card-text">From:</h5>
              <p>Nashville, Tennessee, USA</p>
              <a href="#" className="btn btn-primary">
                Register
              </a>
            </div>
            <div class="container">
              <div class="row">
                <div class="col">Average Atk</div>
                <div class="col">Avg Eliminations</div>
                <div class="col">Deaths</div>
              </div>
  
            <div class="row">
              <div class="col">43099</div>
              <div class="col">118</div>
              <div class="col">36</div>
            </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default Player