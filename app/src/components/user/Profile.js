import React from "react"
import { useGlobalState } from "../../context/GlobalState";
import request from "../../services/api.request";

let matches = request("matches/"); //how to hit my api

const Profile = () => {
  const [ state, dispatch ] = useGlobalState();

  return (
    <div>
      <h1>{state.currentUser.user_id}</h1>
      <p>{matches}</p>
    </div>
  )
}

export default Profile