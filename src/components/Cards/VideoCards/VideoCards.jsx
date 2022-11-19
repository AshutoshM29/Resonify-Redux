import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeFromLikes } from "../../../store/likeSlice";
import { removeFromHistory } from "../../../store/historySlice";
import { removeVideoFromPlaylist } from "../../../store/playlistSlice";
import "../../Cards/Cards.css";
import toast from "react-hot-toast";

const VideoCards = ({ _id, title, creator, profile, playlistDetails }) => {
  const {
    user: { token },
  } = useSelector((store) => store.auth);

  const Dispatch = useDispatch();
  const Location = useLocation();

  return (
    <div className="container-video-card">
      <div>
        <Link to={`/video/${_id}`}>
          <img
            src={`https://i.ytimg.com/vi/${_id}/hqdefault.jpg`}
            alt={_id}
            className="video-thumbnail"
          />
        </Link>
        <i
          className="material-icons icon-cross"
          onClick={() => {
            if (Location.pathname === "/likes") {
              Dispatch(removeFromLikes({ videoId: _id, token }));
            } else if (Location.pathname === "/history") {
              Dispatch(removeFromHistory({ videoId: _id, token }));
            } else if (Location.pathname === "/playlist") {
              Dispatch(
                removeVideoFromPlaylist({
                  videoId: _id,
                  token,
                  playlistId: playlistDetails._id,
                })
              );
              toast.success("Video removed From Playlist");
            }
          }}
        >
          cancel
        </i>
        <div className="video-description">
            {title}
          <div className="video-title">
            <div className="channel-info">
              <img
                className="avatar avatar-xxs"
                src={profile}
                alt={title}
              />
              <p className="channel-name">{creator}</p>
            </div>
          </div>
          <div className="video-details">1.2M Views | 4 hours ago</div>
        </div>
      </div>
    </div>
  );
};

export { VideoCards };