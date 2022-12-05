import { Link } from "react-router-dom";
import { useGlobalState } from "../context/GlobalState";
import logo from "/workspace/esports_tracker_final_project_frontend/app/src/img/Logo.png";


function GetHeader() {
    const [state, dispatch] = useGlobalState();
    
    return (
        <div className="row">
      <div className="col">
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
            <Link to="home">
            <img
              style={{ width: "100px", height: "100px" }}
              className="navbar-brand"
              href="Home"
              src={logo}
              ></img>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
              >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="Home"
                    >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="About">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="Team">
                    Teams
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="Schedule">
                    Schedule
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="Video">
                    Video
                  </a>
                </li>
                {
                    state.currentUser && (
                        <li className="nav-item">
                  <a className="nav-link" href="/profile">
                    Profile
                  </a>
                </li>
                )}
              </ul>
            </div>
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
        
          </div>
        </nav>
      </div>
    </div>
  );
}
export default GetHeader;
