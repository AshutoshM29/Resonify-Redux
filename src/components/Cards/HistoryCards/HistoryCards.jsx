import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteWatchLater } from "../../../store/watchLaterSlice";
import "../Cards.css";

const HistoryCards = ({ video }) => {
  const { _id, title, creator, profile } = video;
  const dispatch = useDispatch();
  const {
    user: { token },
  } = useSelector((store) => store.auth);

  const deleteWatchLaterHandler = () => {
    if (token) {
      dispatch(deleteWatchLater({ videoId: _id, token: token }));
    }
  };

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
                onClick={deleteWatchLaterHandler}
              >
                delete
              </i>
            </div>
          </div>
            <div className="video-details">1.2M Views | 4 hours ago</div>
        </div>
      </div>
    </div>
  );
};

export { HistoryCards };