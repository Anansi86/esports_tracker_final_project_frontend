import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import request from "../../services/api.request";

const About = () => {
  // let navigate = useNavigate();
    const [heroes, setHeroes] = useState([]);
  
    useEffect(() => {
      async function getData() {
        const responseHeroes = await request({
          method: "GET",
          url: "Hero/",
        });
  
        setHeroes(responseHeroes.data);
        console.log(responseHeroes.data)
      }
      getData();
      
    }, []);
    
    return (
      


      <div className="container">
        <div className="row">
    <div className="col">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">About OverWatch</h5>
          <p className="card-text">Overwatch 2 is a free-to-play, team-based action game set in the optimistic future, 
          where every match is the ultimate 5v5 battlefield brawl. 
          Play as a time-jumping freedom fighter, a beat-dropping battlefield DJ, 
          or one of over 30 other unique heroes as you battle it out around the globe.</p>
          {/* <p></p> */}
          {/* <Link to="/Login" className="btn btn-primary">Click Here</Link> */}
        </div>
      </div>
    </div>
        <div className="row">
          {heroes.map((hero) => (
              <div className="col p-3 d-flex flex-column position-static">
                <div className="card h-100">
                  <div className="card-body ">
                    <h5 className="card-title">{hero.name}</h5>
                      <Link to={"/Character/" + hero.id}>
                      <img className="hero_icon" href="Home" src={hero.character_img} alt="hero_icon" />
                    </Link>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
      </div>
    );
        }
export default About;