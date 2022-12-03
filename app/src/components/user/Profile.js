import React from "react"
import { useGlobalState } from "../../context/GlobalState";
import request from "../../services/api.request";

const Profile = async () => {
  const [ state, dispatch ] = useGlobalState();

  return (
    <div>
      <h1>{state.currentUser.user_id}</h1>
      <p>{state.currentUser.first_name} {state.currentUser.last_name} ({state.currentUser.username})</p>
    </div>
  )
}

export default Profile