import discord from "/workspace/esports_tracker_final_project_frontend/app/src/img/discord.png";
import facebook from "/workspace/esports_tracker_final_project_frontend/app/src/img/facebook.png";
import twitter from "/workspace/esports_tracker_final_project_frontend/app/src/img/twitter.png";
import instagram from "/workspace/esports_tracker_final_project_frontend/app/src/img/instagram.png";

const Footer = () => (
  <footer className="page-footer font-small blue pt-4">
    <div className="container-fluid text-center text-md-left">
      <div className="row pt-1">
        {/* left col */}
        <div className="col-md-4 mt-md-0 mt-3">
          <h5 className="text-uppercase">Company Info</h5>
          <p>Games Broadcasting LLC</p>
          <h5>Address:</h5>
          <p>348 Main St Lexington, Ky 40513</p>

          <p></p>
        </div>

        {/* <hr className="clearfix w-100 d-md-none pb-0" /> */}

        {/* middle col */}
        <div className="col-md-4 mb-md-0 mb-3">
          <h5 className="text-uppercase">Social Media</h5>

          <img
            //   style={{ width: "100px", height: "100px" }}
            className="navbar-brand"
            href="Home"
            src={discord}
          ></img>
          <img
            //   style={{ width: "100px", height: "100px" }}
            className="navbar-brand"
            href="Home"
            src={facebook}
          ></img>
          <img
            //   style={{ width: "100px", height: "100px" }}
            className="navbar-brand"
            href="Home"
            src={twitter}
          ></img>
          <img
            //   style={{ width: "100px", height: "100px" }}
            className="navbar-brand"
            href="Home"
            src={instagram}
          ></img>
        </div>

        {/* right col */}
        <div className="col-md-4 pb-3">
          <h5 className="text-uppercase">Links</h5>
          <div className="row">

          <img
            className="p-0 owl"
            src="https://p.kindpng.com/picc/s/377-3771704_overwatch-league-logo-overwatch-league-logo-ai-hd.png"
          />
          <img
            className="p-0 bliz linksImage"
            src="https://seeklogo.com/images/B/Blizzard_Entertainment-logo-6A5908AC72-seeklogo.com.png"
          />
          </div>
        </div>
      </div>
    </div>

    <div className="footer-copyright text-center py-3">© 2022 Copyright:</div>
  </footer>
);

export default Footer;
