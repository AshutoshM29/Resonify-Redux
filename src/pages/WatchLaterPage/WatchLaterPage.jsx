import React from "react";
import { useSelector } from "react-redux";
import { Sidebar } from "../../components";
import { HistoryCards } from "../../components/Cards/HistoryCards/HistoryCards";
import "./WatchLaterPage.css";

const WatchLaterPage = () => {
  const watchlaterVideos = useSelector((store) => store.watchLater.watchLater);
  return (
    <div className="library-home-page">
      <Sidebar />
      {watchlaterVideos.length===0 ?
      <div className="main-content-page">
        <div className="menu-bar">
            <h2 className="page-title">Watch Later</h2>
          </div>
        <div className="logout-content">
          <h2 className="h2">
          No videos added to watch later
          </h2>
        </div>
      </div>
      :
      <div className="main-content-page">
        <div className="menu-bar">
          <h2 className="page-title">Watch Later</h2>
        </div>
        <div className="video-listing-page">
          {watchlaterVideos?.map((video) => (
            <HistoryCards video={video} />
          ))}
        </div>
      </div>}
    </div>
  );
};

export { WatchLaterPage };