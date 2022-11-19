import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearAllHistory, getHistory } from "../../store/historySlice";
import "./HistoryPage.css";
import { VideoCards } from "../../components/Cards/VideoCards/VideoCards";
import { Sidebar } from "../../components";

const HistoryPage = () => {
  const [videoList, setVideoList] = useState([]);
  const dispatch = useDispatch();

  const {
    user: { token },
  } = useSelector((store) => store.auth);
  const { histories, status } = useSelector((store) => store.history);
  const { data: videosFromStore } = useSelector((state) => state.video);

  const ClearAllHistory = () => {
    dispatch(clearAllHistory({ token: token }));
  };

  useEffect(() => {
    const filteredVideos = videosFromStore.filter((video) =>
      histories.some((ele) => ele._id === video._id)
    );
    setVideoList(filteredVideos);
  }, [histories]);

  useEffect(() => {
    const data = { token: token };
    dispatch(getHistory(data));
  }, []);

  return (
    <div className="library-home-page">
      <Sidebar />
      {histories.length === 0 && (
        <div className="main-content-page">
          <div className="menu-bar">
            <h2 className="page-title">My History</h2>
          </div>
          <div className="logout-content">
            <h2 className="h2">
              No videos added to watch history
            </h2>
          </div>
        </div>
      )}
      <div className="main-content-page">
      {videoList.length > 0 && (
        <div className="menu-bar">
          <h2 className="page-title">My History</h2>
          <button
            className="btn btn-primary-solid"
            onClick={ClearAllHistory}
          >
            Clear Full History
          </button>
        </div>
      )}
        <div className="video-listing-page">
          {videoList?.map(({ _id, title, creator, profile }) => (
            <VideoCards
              key={_id}
              _id={_id}
              title={title}
              creator={creator}
              profile={profile}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export { HistoryPage };