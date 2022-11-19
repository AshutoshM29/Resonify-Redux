import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Videopage.module.css";
import { addToLikes, removeFromLikes } from "../../store/likeSlice";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import PlaylistPortal from "../../PlaylistPortal";
import { VideoPlayer } from "../../components/VideoPage/VideoPlayer/VideoPlayer";

const checkIfPresentLikes = (likes, videoId) => {
  return likes.some((item) => item._id === videoId);
};

const VideoPage = () => {
  const {
    user: {
      token
    },
  } = useSelector((store) => store.auth);

  const {
    likes
  } = useSelector((store) => store.like);

  var {
    videoId
  } = useParams();
  const [videoInfo, setVideoInfo] = useState(null);
  const Dispatch = useDispatch();

  const [presentInLikes, setPresentInLikes] = useState(
    checkIfPresentLikes(likes, videoId)
  );
  const [showModal, setShowModal] = useState(false);
  const likeHandler = () => {
    if (token) {
      if (checkIfPresentLikes(likes, videoId)) {
        Dispatch(removeFromLikes({
          videoId: videoId,
          token: token
        }));
      } else {
        Dispatch(addToLikes({
          videoInfo: videoInfo,
          token: token
        }));
      }
      return;
    }

    {
      toast.error("Kindly Login to Like the video");
    }
  };

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

  useEffect(() => {
    if (checkIfPresentLikes(likes, videoId)) {
      setPresentInLikes(true);
    } else {
      setPresentInLikes(false);
    }
  }, [likes, videoId]);

  return (
    <>
      <div className={styles.videoPage}>
        <div className="video-page-container">
        <div className="video-page">
        {showModal ? (
          <PlaylistPortal setShowModal={setShowModal} video={videoInfo} />
        ) : null}
        <VideoPlayer />
        {videoInfo && (
          <section>
            <div className="video-panel">
              <div className="video-sub-menus">
                <img
                  className={styles.videoImg}
                  src={videoInfo?.profile}
                  alt={videoInfo?.profile}
                />
                <div className="desc-creator-video" src={videoInfo?.creator}>
                  {videoInfo?.creator}
                </div>
                <div className={styles.buttons}>
                  <div onClick={likeHandler}>
                    {presentInLikes ? (
                      <button className="btn btn-icon">
                        <i className="material-icons" >
                          thumb_up
                        </i>
                      </button>
                    ) : (
                      <button className="btn btn-icon">
                        <i className="material-icons-outlined">
                          thumb_up
                        </i>  
                      </button>
                    )}
                  </div>
                  <div
                    onClick={() => {
                      if (!token) {
                        toast.error("Login first ");
                      } else {
                        setShowModal(true);
                      }
                    }}
                  >
                    <i class="material-icons">
                      playlist_add
                    </i>
                  </div>
                </div>
              </div>
            </div>
            <div className="container-description">
              <h4 className="h4 video-heading">Description</h4>
              <div className="video-description-play">{videoInfo?.description}</div>
            </div>
          </section>
        )}
        </div>
        </div>
      </div>
    </>
  );
};
export { VideoPage };