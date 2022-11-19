import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Sidebar } from "../../components";
import { VideoCards } from "../../components/Cards/VideoCards/VideoCards";
import { getLikes } from "../../store/likeSlice";
import "../LikedVideoPage/LikedVideoPage.css";

const LikedVideoPage = () => {
  const dispatch = useDispatch();
  const {
    user: { token },
  } = useSelector((store) => store.auth);
  const { likes } = useSelector((store) => store.like);

  useEffect(() => {
    const data = { token: token };
    dispatch(getLikes(data));
  }, []);

  return (
    <div className="library-home-page">
      <Sidebar />
      {likes.length === 0 ? (
        <div className="main-content-page">
          <div className="menu-bar">
            <h2 className="page-title">Favourite Videos</h2>
          </div>
          <div className="logout-content">
            <h2 className="h2">
              No videos added to favorite{""}
            </h2>
          </div>
        </div>
      ) : (
        <div className="main-content-page">
          <div className="menu-bar">
            <h2 className="page-title">Favourite Videos</h2>
          </div>
        <div className="video-listing-page">
          {likes?.map(({ _id, title, creator, profile }) => {
            return (
              <VideoCards
                key={_id}
                _id={_id}
                title={title}
                creator={creator}
                profile={profile}
              />
            );
          })}
        </div>
        </div>
      )}
    </div>
  );
};
export { LikedVideoPage };