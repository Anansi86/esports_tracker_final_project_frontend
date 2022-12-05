/* import { Link } from "react-router-dom";
import { useGlobalState } from "../context/GlobalState";
import logo from "/workspace/esports_tracker_final_project_frontend/app/src/img/Logo.png";

function NavBar() {
  const [state, dispatch] = useGlobalState();

  return (

        <div container>
            <Link to="Landing">
              <img
                alt="Home"
                style={{ width: "100px", height: "100px" }}
                src={logo}
                />
            </Link>
        
    <nav>
      <ul
        style={{
          display: "flex",
          flexFlow: "row nowrap",
          justifyContent: "space-evenly",
          listStyle: "none",
        }}
        >
          <li>
            <Link to="Landing">Home</Link>
          </li>
          {
            <li>
              <Link to="About">About</Link>
            </li>
          }
          {
            <li>
              <Link to="Team">Teams</Link>
            </li>
          }
          {
            <li>
              <Link to="Schedule">Schedule</Link>
            </li>
          }
          {
            <li>
              <Link to="Video">Video</Link>
            </li>
          }
          {
            !state.currentUser && (
              <li>
              <Link to="/login">Login</Link>
            </li>
          )}
          {
            !state.currentUser && (
              <li>
              <Link to="/register">Register</Link>
            </li>
          )}
          {
            state.currentUser && (
              <li>
              <Link to="/profile">Profile</Link>
            </li>
          )}

      </ul>
    </nav>
          </div>
  );
}

export default NavBar;*/
