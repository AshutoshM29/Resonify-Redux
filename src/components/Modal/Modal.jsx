import React from "react";
import { useDispatch, useSelector } from "react-redux";
import PlaylistInputForm from "./PlaylistInputForm";
import { deletePlaylist, addVideoToPlaylist, removeVideoFromPlaylist } from "../../store/playlistSlice";
import { toast } from "react-hot-toast";
import "./Modal.css";

export default function Modal({ setShowModal, video }) {
  const playlistsData = useSelector((state) => state.playlist.playlist);
  const {
    user: { token },
  } = useSelector((store) => store.auth);

  const playlistDispatch = useDispatch();
  const deletePlaylistName = async (playlistId) => {
    playlistDispatch(deletePlaylist({ token, playlistId }));
    return toast.success("Removed playlist successfully!");
  };

  const addVideoToPlayList = async (video, playlistId) => {
    playlistDispatch(addVideoToPlaylist({ video, playlistId, token }));
    return toast.success("Video added to playlist!");
  };
  const removeVideoFromPlayList = async (videoId, playlistId) => {
    playlistDispatch(removeVideoFromPlaylist({ videoId, playlistId, token }));
    return toast.success("Video removed from playlist!");
  };

  const updatePlaylist = (e, video, playlistId) => {
    e.target.checked
      ? addVideoToPlayList(video, playlistId)
      : removeVideoFromPlayList(video._id, playlistId);
  };
  return (
    <div className="modal-wrapper">
      <div className="modal">
        <div className="modal-close-icon">
          <i className="material-icons" onClick={() => setShowModal(false)}>
            close
          </i>
        </div>
        <div>
          <div className="modal-heading">Save to</div>
            {playlistsData.map((playlist) => (
              <div className="modalPlaylist-container" key={playlist._id}>
                <div>
                  <input
                    type="checkbox"
                    id={playlist._id}
                    className="input-playlist"
                    onChange={(e) => {
                      updatePlaylist(e, video, playlist._id);
                    }}
                  />
                  <label htmlFor={playlist._id}> {playlist.title}</label>
                </div>
                <i
                  className="material-icons modal-icon"
                  onClick={() => {
                    deletePlaylistName(playlist._id);
                  }}>
                    delete
                </i>
              </div>
            ))}
        </div>
        <div>
          <div className="modal-heading">+ Create playlist</div>
          <PlaylistInputForm className="input-playlist" />
        </div>
      </div>
    </div>
  );
}