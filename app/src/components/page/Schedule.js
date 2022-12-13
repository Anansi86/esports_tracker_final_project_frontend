import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalState } from "../../context/GlobalState";
import { Link } from "react-router-dom";
import request from "../../services/api.request";
import youtubeIcon from "../../img/youtube.com.png";

const Schedule = () => {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    async function getData() {
      const responseMatches = await request({
        method: "GET",
        url: "Match/",
      });

      const matches = responseMatches.data.map(match => {
        const date = match.game_date;
        const date_parts = date.split("-");
        return {
          year: date_parts[0],
          restOfDate: date_parts[1] + '-' + date_parts[2],
          ...match
        }
      });

      setMatches(matches);
    }
    getData();
  }, []);

  return (

    <div className="container-flex">

<table class="table table-dark">
    <thead>
      <tr>
        <th scope="col" className="text-center">Date</th>
        <th scope="col" className="text-center">Team1</th>
        <th scope="col" className="text-center">Score</th>
        <th scope="col" className="text-center">Team2</th>
        <th scope="col" className="text-center">Replay</th>
      </tr>
    </thead>
    <tbody>
      {matches.map(match => (
        <tr className="table-active">
          <th scope="row"><span className="d-none d-md-inline">{match.year}-</span>{match.restOfDate}</th>
          <td className="text-end">

          <span className="d-none d-md-inline">{match.team1.name}</span>
            <img className="team_icon_small mx-3" src={match.team1.icon} id="team_icon" />
          </td>
          <td className="text-center">
          {match.scores[0].team1_score} - {match.scores[0].team2_score}
          </td>
          <td className="text-start">

          <img className="team_icon_small mx-3" src={match.team2.icon} id="team_icon" />
            <span className="d-none d-md-inline">{match.team2.name}</span>
          </td>
          <td className="text-end">
            <a className="btn btn-secondary p-0 p-md-3" target="_blank" href={match.video_url}>
              <span className="d-none d-md-inline">replay</span>
              <img className="d-inline d-md-none" src={youtubeIcon} />
            </a>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
  </div>
  );
};

export default Schedule;

{/* <div className="row">
  <div className="col">Date</div>
  <div className="col">Score</div>
  <div className="col">Watch</div>
</div>
{match.map((match) => {
  return (
    <div className="row"  id="schedule">
      <div className="col schedule_column date">{match.game_date}</div>
      <div className="col schedule_column" id="team1">
      <img className="team_icon" src={match.team1.icon} id="team_icon" />
        {match.team1.name} 
      </div>
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
})} */}