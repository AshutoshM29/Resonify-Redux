import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { VideoCards } from "../../components/Cards/VideoCards/VideoCards";
import { getAllPlaylist, deletePlaylist } from "../../store/playlistSlice";
import "./MyPlaylistPage.css";
import { Sidebar } from "../../components";

const MyPlaylistPage = () => {
  const dispatch = useDispatch();
  const { playlist } = useSelector((store) => store.playlist);
  const {
    user: { token },
  } = useSelector((store) => store.auth);

  useEffect(() => {
    dispatch(getAllPlaylist({ token }));
  }, []);

  const deleteWholePlaylist = (playlistId) => {
    dispatch(deletePlaylist({ token, playlistId }));
  };

  return (
    <div className="library-home-page">
      <Sidebar />
      {playlist.length === 0 && (
        <div className="main-content-page">
          <div className="menu-bar">
            <h2 className="page-title">My Playlists</h2>
          </div>
          <div className="logout-content">
            <h2 className="h2">
              No playlist added, {""}
            </h2>
          </div>
        </div>
      )}
      {playlist.map((everyPlaylist) => {
        return (
          <div className="main-content-page" key={everyPlaylist._id}>
            <div className="menu-bar">
              <h2 className="page-title">My Playlists</h2>
              <h2 className="page-title">{everyPlaylist.title}
                <i
                  className="material-icons"
                  onClick={() => deleteWholePlaylist(everyPlaylist._id)}
                >
                  delete
                </i>
                </h2>
            </div>
            <div className="video-listing-page">
              {everyPlaylist.videos.map((everyVideo) => {
                const { _id, title, creator, profile } = everyVideo;
                return (
                  <VideoCards
                    _id={_id}
                    title={title}
                    creator={creator}
                    profile={profile}
                    playlistDetails={everyPlaylist}
                  />
                );
              })}
            </div>
          </div>
          );
        })}
    </div>
  );
};

export { MyPlaylistPage };