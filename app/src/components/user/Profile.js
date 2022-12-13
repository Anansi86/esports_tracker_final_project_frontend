import React from "react"
import { useGlobalState } from "../../context/GlobalState";

const Profile = () => {
  const [ state, dispatch ] = useGlobalState();
  console.log(state.currentUser)

  return (
    <div>
      <h1>
        {state.currentUser.username}
        </h1>

      <p>
      {state.currentUser.first_name} 
      </p>

      <p>
      {state.currentUser.last_name}
      </p>

      <p>
        {state.team1}
      </p>

    </div>
  )
}


export default Profile