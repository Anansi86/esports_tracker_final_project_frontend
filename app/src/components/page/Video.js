import React, { useEffect, useState } from "react";
import request from "../../services/api.request";

const Video = () => {
  const [match, setMatch] = useState([]);

  useEffect(() => {
    async function getData() {
      const responseMatch = await request({
        method: "GET",
        url: "Match/",
      });

      setMatch(responseMatch.data);
      console.log(responseMatch.data);
    }
    getData();
  }, []);
  
  return (
    <div className="container">
      <div className="row">
        {match.map((match) => {
          return (
            <div className="col-sm-6 col-md-4 col-lg-3">
              <div className="card">
                <div className="card-body">
                <iframe className="w-100"
                    src={match.video_url}
                    title="YouTube video player" 
                  //  frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen>
                </iframe>
                <p>{match.game_date}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Video;
