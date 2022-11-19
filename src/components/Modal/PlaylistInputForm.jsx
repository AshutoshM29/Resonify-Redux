import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewPlaylist } from "../../store/playlistSlice";
import { toast } from "react-hot-toast";
import "./Modal.css";

export default function PlaylistInputForm() {
  const [playlistName, setPlayListName] = useState("");
  const inputPlaylistDispatch = useDispatch();
  const {
    user: { token },
  } = useSelector((store) => store.auth);

  const addPlaylistNameHandler = async (playlistName) => {
    const playlist = { title: playlistName };
    inputPlaylistDispatch(addNewPlaylist({ playlist, token }));
    setPlayListName(" ");
    return toast.success("Playlist created!");
  };
  return (
    <div className="input-icon">
      <input
        type="text"
        placeholder="My Playlist"
        className="input"
        autoFocus={true}
        value={playlistName}
        onChange={(e) => setPlayListName(e.target.value)}
      />
      <span
        className="icon"
        onClick={() => addPlaylistNameHandler(playlistName)}
      >
        <i className="material-icons">add</i>
      </span>
    </div>
  );
}