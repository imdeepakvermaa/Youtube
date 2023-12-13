import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import { Google_API_Key } from "../utils/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faThumbsUp } from "@fortawesome/free-solid-svg-icons";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const [videoDetails, setVideoDetails] = useState({
    title: "",
    description: "",
  },[]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchVideoDetails = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/videos?part=snippet%2Cstatistics&id=${searchParams.get(
            "v"
          )}&key=${Google_API_Key}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch video details");
        }

        const data = await response.json();
        const snippet = data.items[0].snippet;
        const statistics = data.items[0].statistics; // Corrected index here
        setVideoDetails({
          title: snippet.title,
          description: snippet.description,
          channelTitle: snippet.channelTitle,
          ChannelDp: snippet.thumbnails.default.url,
          likeCount: statistics.likeCount,
        });
      } catch (error) {
        console.error("Error fetching video details:", error);
      }
    };

    dispatch(closeMenu());
    fetchVideoDetails();
  }, [dispatch, searchParams]);
  return (
    <div className="text-white px-24 py-4">
      <iframe
        className="rounded-2xl"
        width="900"
        height="500"
        src={"https://www.youtube.com/embed/" + searchParams.get("v")}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>

      <div>
        <div>
          <h2 className="text-xl font-bold ">{videoDetails.title}</h2>
          {/* <p>{videoDetails.description}</p> */}
        </div>

        <div>
          <div>
            <div>
              <img src={videoDetails.ChannelDp} alt="" />
            </div>
            <div>
              <p className="text-white">{videoDetails.channelTitle}</p>
              <p>9.89M subscriber</p>
            </div>
            <div>
              <button className="text-black text-lg bg-white w-32 h-10 rounded-2xl font-semibold">
                <FontAwesomeIcon icon={faBell} /> Subscribe
              </button>
            </div>
          </div>

          <div className="text-white">
            <button>
            <FontAwesomeIcon icon={faThumbsUp} />
            </button> 
            {videoDetails.likeCount}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchPage;
