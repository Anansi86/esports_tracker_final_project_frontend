import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Login from './components/user/Login';
import Register from './components/user/Register';
import Profile from './components/user/Profile';
import Landing from './components/page/Landing';
import Home from './components/page/Home';
import About from './components/page/About';
import Team_Selection from './components/page/Team_Selection';
import Video from './components/page/Video';
import Team from './components/page/Team';
import Player from './components/page/Player';
import Schedule from './components/page/Schedule';
import Character from './components/page/Character';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="Landing" element={<Landing />} />
          <Route path="Home" element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Team_Selection" element={<Team_Selection />} />
          <Route path="Video" element={<Video />} />
          <Route path="Team" element={<Team />} />
          <Route path="Player" element={<Player />} />
          <Route path="Schedule" element={<Schedule />} />
          <Route path="Character" element={<Character />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
