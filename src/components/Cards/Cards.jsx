import React from "react";
import { Link } from "react-router-dom";
import { addToWatchLater } from "../../store/watchLaterSlice";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import "../Cards/Cards.css";

const Cards = ({ video }) => {
  const { _id, title, creator, profile } = video;
  const dispatch = useDispatch();
  const {
    user: { token },
  } = useSelector((store) => store.auth);

  const watchLaterHandler = () => {
    if (token) {
      dispatch(addToWatchLater({ video: video, token: token }));
    } else {
      toast.error("Please Login first!");
    }
  };

  return (
    <div className="container-video-card">
      <div>
        <Link to={`/video/${_id}`}>
          <img
            src={`https://i.ytimg.com/vi/${_id}/0.jpg`}
            alt={_id}
            className="video-thumbnail"
          />
        </Link>
      </div>
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
          <div>
            <i
              className="material-icons"
              onClick={watchLaterHandler}>
                watch_later
            </i>
          </div>
        </div>
          <div className="video-details">1.2M Views | 4 hours ago</div>
      </div>
    </div>
  );
};

export { Cards };