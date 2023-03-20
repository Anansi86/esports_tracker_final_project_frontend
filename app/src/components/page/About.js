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
          {heroes.map((hero) => {
            return (
              <div class="col p-3 d-flex flex-column position-static">
                <div className="card h-100">
                  <div className="card-body ">
                    <h5 className="card-title">{hero.name}</h5>
                      <Link to={"/Character/" + hero.id}>
                      <img className="hero_icon" href="Home" src={hero.character_img} alt="hero_icon" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
        }
export default About