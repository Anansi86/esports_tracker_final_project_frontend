import React, { useEffect, useState } from "react";
import request from "../../services/api.request";

const Schedule = () => {
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
    <div className="container">
      <div className="row">
        <div className="col">Date</div>
        <div className="col">Score</div>
        <div className="col">Watch</div>
      </div>
      {match.map((match) => {
        return (
          <div className="row"  id="schedule">
            <div className="col schedule_column date">{match.game_date}</div>
            <div className="col schedule_column" id="team1"> <img className="team_icon" src={match.team1.icon} id="team_icon" />
              {match.team1.name} </div>
              <div className="col-1 point_column">{match.scores[0].team1_score} - {match.scores[0].team2_score}</div>
            <div className="col schedule_column" id="team2">{match.team2.name + ' '}  <img className="team_icon" src={match.team2.icon} id="team_icon" />
            </div>
            <div className="col">
              <p>The winner is {match.win}</p>
              </div>
            <div className="col replay">
              <a className="btn btn-secondary" target="_blank" href={match.video_url}>replay</a>
            </div>
          </div>
        );
      })}
    </div>
    {/* <table className="table table-dark">
    <thead />
    <tbody>
      <tr className="table-active" />
      <tr />
      <tr>
        <th scope="row">3</th>
        <td colSpan={2} className="table-active">
          Larry the Bird
        </td>
        <td>@twitter</td>
      </tr>
    </tbody>
  </table> */}
    </div>
  );
};

export default Schedule;
