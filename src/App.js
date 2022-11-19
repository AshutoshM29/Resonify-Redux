import { Route, Routes } from "react-router-dom";
import Mockman from "mockman-js";
import { useEffect } from "react";
import "./App.css";

import {
  Homepage,
  Signup,
  Login,
  VideoListingPage,
  LikedVideoPage,
  WatchLaterPage,
  MyPlaylistPage,
  HistoryPage,
  VideoPage,
  Logout,
  NotFound,
} from "./pages/index";

import { useDispatch } from "react-redux";
import { fetchVideos } from "./store/videoSlice";
import { NoRequireAuth, RequiresAuth } from "./RequiresAuth";
import { Toaster } from "react-hot-toast";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchVideos());
  }, []);

  return (
    <div className="App">
      <Toaster
        toastOptions={{
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
            border: "solid 2px #FDD947",
          },
        }}
        position="bottom-right"
      />
      <Routes>
          <Route path="/" element={<Homepage />} />
          <Route
            path="/videolist"
            element={
              <RequiresAuth>
                {/* chaneg the name of require auth */}
                <VideoListingPage />
              </RequiresAuth>
            }
          />
          <Route
            path="/favorites"
            element={
              <RequiresAuth>
                <LikedVideoPage />
                {/* change the name of the functions */}
              </RequiresAuth>
            }
          />
          <Route
            path="/allplaylists"
            element={
              <RequiresAuth>
                <MyPlaylistPage />
              </RequiresAuth>
            }
          />
          <Route
            path="/history"
            element={
              <RequiresAuth>
                <HistoryPage />
              </RequiresAuth>
            }
          />
          <Route
            path="/watchlater"
            element={
              <RequiresAuth>
                <WatchLaterPage />
              </RequiresAuth>
            }
          />
          <Route
            path="/login"
            element={
              <NoRequireAuth>
                <Login />
              </NoRequireAuth>
            }
          />
          <Route
            path="/signup"
            element={
              <NoRequireAuth>
                <Signup />
              </NoRequireAuth>
            }
          />
          <Route
            path="/logout"
            element={
              <NoRequireAuth>
                <Logout />
              </NoRequireAuth>
            }
          />
          <Route path="video/:videoId" element={<VideoPage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/mockapi" element={<Mockman />} />
      </Routes>
    </div>
  );
}

export default App;