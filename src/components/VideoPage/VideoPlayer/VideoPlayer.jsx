import "../css/VideoPage.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player/youtube";
import { addToHistory } from "../../../store/historySlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const VideoPlayer = ({ videoId, title }) => {
  const {
    user: { token },
  } = useSelector((store) => store.auth);

  var { videoId } = useParams();
  const [videoInfo, setVideoInfo] = useState(null);
  const Dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(`/api/video/${videoId}`);
        setVideoInfo(response.data.video);
      } catch (error) {
        console.error("error", error);
      }
    })();
  }, [videoId]);

  return (
    <div className="video-player-container">
      <h2 className="h2">{videoInfo?.title}</h2>
      <div className="video-player">
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${videoId}`}
          width="100%"
          height="40vh"
          controls={true}
          onPlay={() => Dispatch(addToHistory({ video: videoInfo, token }))}
        />
      </div>
    </div>
  );
};

export { VideoPlayer };