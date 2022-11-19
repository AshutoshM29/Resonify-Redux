import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <aside className="sidebar">
    <div className="menu-sidebar">
      <ul className="list-sidebar">
        <li className="sidebar-links">
          <Link to="/">
            <i className="material-icons">home</i>
          </Link>
          <div className="title">Home</div>
        </li>
        <li className="sidebar-links">
          <Link to="/videolist">
            <i className="material-icons">explore</i>
          </Link>
          <div className="title">Explore</div>
        </li>
        <li className="sidebar-links">
          <Link to="/favorites">
            <i className="material-icons">favorite</i>
          </Link>
          <div className="title">Favorite</div>
        </li>
        <li className="sidebar-links">
          <Link to="/watchlater">
            <i className="material-icons">watch_later</i>
          </Link>
          <div className="title">Watch Later</div>
        </li>
        <li className="sidebar-links">
          <Link to="/allplaylists">
            <i className="material-icons">playlist_play</i>
          </Link>
          <div className="title">Playlist</div>
        </li>
        <li className="sidebar-links">
          <Link to="/history">
            <i className="material-icons">history</i>
          </Link>
          <div className="title">History</div>
        </li>
      </ul>
    </div>
   </aside>
  );
};

export { Sidebar };