import { Link } from "react-router-dom";
import { useGlobalState } from "../context/GlobalState";
import AuthService from "../services/auth.service";
import logo from "/workspace/esports_tracker_final_project_frontend/app/src/img/Logo.png";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";

function GetHeader() {
  let navigate = useNavigate();

  const [state, dispatch] = useGlobalState();

  const logout = () => {
    AuthService.logout();
    dispatch({
      currentUserToken: null,
      currentUser: null,
    });
    navigate("/Home");
  };

  return (
    <div className="row" color="orange">
      <div className="col" style={{ height: "100px" }}>
        <nav
          className="navbar navbar-expand-lg bg-light"
          style={{
            position: "fixed",
            height: "100px",
            width: "100%",
            top: 0,
            left: 0,
            zIndex: 9999,
          }}
        >
          <div className="container-fluid">
            <Link to="/home">
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
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/Home"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/About">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/Team_Selection">
                    Teams
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/Schedule">
                    Schedule
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/Video">
                    Video
                  </a>
                </li>

                {state.currentUser && (
                  <li className="nav-item">
                    <a className="nav-link" href="/profile">
                      Profile
                    </a>
                  </li>
                )}
              </ul>
            </div>
            {!state.currentUser && <Link className="btn btn-secondary p-0 p-md-3 m-2" to="/login">Login</Link>}
            {!state.currentUser && <Link className="btn btn-secondary p-0 p-md-3 m-2" to="/register">Register</Link>}

            {state.currentUser && <p>{state.currentUser.username},&nbsp;</p>}
            {state.currentUser && (
              <Button className="button mb-3" onClick={() => logout()}>
                Logout
              </Button>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
}

export default GetHeader;
