import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Cards, Sidebar } from "../../components/index";
import { STATUSES, fetchVideos } from "../../store/videoSlice";

const VideoListingPage = () => {
  const { data, status } = useSelector((state) => state.video);
  const dispatch = useDispatch();

  const [categorySelected, setCategorySelected] = useState("All");

  const getMeCategory = (categorySelected, videolist) => {
    if (categorySelected !== "All") {
      return videolist.filter(
        (everyvideo) => everyvideo.category === categorySelected
      );
    } else {
      return videolist;
    }
  };

  useEffect(() => {
    dispatch(fetchVideos());
  }, [dispatch]);

  if (status === STATUSES.ERROR) {
    return <h2>Error...</h2>;
  }

  return (
    <div className="library-home-page">
      <Sidebar />
        <div className="main-content-page">
          <div>
          <div className="container-chips">
          <ul className="list-chips">
            <button
              className="chips text-bold active"
              onClick={() => setCategorySelected("All")}
            >
              All
            </button>
            <button
              className="chips text-bold"
              onClick={() => setCategorySelected("Music Theory")}
            >
              Music Theory
            </button>
            <button
              className="chips text-bold"
              onClick={() => setCategorySelected("Music Production")}
            >
              Music Production
            </button>
            <button
              className="chips text-bold"
              onClick={() => setCategorySelected("Guitar Lessons")}
            >
              Guitar Lessons
            </button>
            <button
              className="chips text-bold"
              onClick={() => setCategorySelected("Piano Lessons")}
            >
              Piano Lessons
            </button>
            <button
              className="chips text-bold"
              onClick={() => setCategorySelected("Vocal Traning")}
            >
              Vocal Traning
            </button>
            </ul>
          </div>
          </div>

          <div className="menu-bar">
            <h2 className="page-title">Trending Videos</h2>
          </div>
          <div className="container-videos">
            <div className="video-listing-page">
              {getMeCategory(categorySelected, data)?.map((items) => {
                return <Cards video={items} />;
              })}
            </div>
          </div>
        </div>
    </div>
  );
};

export { VideoListingPage };