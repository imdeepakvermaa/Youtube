import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import { Google_API_Key } from "../utils/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faDownload,
  faShare,
  faThumbsDown,
  faThumbsUp,
  faEllipsis,
} from "@fortawesome/free-solid-svg-icons";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const [videoDetails, setVideoDetails] = useState(
    {
      title: "",
      description: "",
    },
    []
  );
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
        const statistics = data.items[0].statistics;
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

      <div className="">
        <div className="mt-3">
          <p className=" font-bold text-xl">{videoDetails.title}</p>
        </div>

        <div className="flex gap-24 mt-1">
          <div className="flex items-center">
            <div>
              <img
                src={videoDetails.ChannelDp}
                alt="channel-logo"
                className="rounded-full h-12 w-12"
              />
            </div>
            <div className="ml-2">
              <p className="text-white font-bold text-lg">
                {videoDetails.channelTitle}
              </p>
              <p className="font-medium text-gray-400 text-xs">
                9.89M subscribers
              </p>
            </div>
            <div className="ml-12">
              <button className="text-black text-lg bg-white w-32 h-8 rounded-2xl font-semibold">
                <FontAwesomeIcon icon={faBell} /> Subscribe
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between ">
            <div className="flex gap-6 items-center ">
              <div className="gap-4 text-black ">
                <button className="w-32 h-8 rounded-2xl font-bold text-lg bg-gray-500 ">
                  <FontAwesomeIcon icon={faThumbsUp} />
                  {videoDetails.likeCount >= 1000
                    ? (videoDetails.likeCount / 1000).toFixed(1) + "K"
                    : videoDetails.likeCount}{" "}
                  | <FontAwesomeIcon icon={faThumbsDown} />
                </button>
              </div>
              <div className="text-black  flex items-center justify-center  gap-2 h-8 w-28 rounded-2xl font-bold text-lg bg-gray-500 ">
                <button className="flex items-center justify-center gap-2  rounded-2xl font-bold text-lg bg-gray-500">
                  <FontAwesomeIcon
                    icon={faShare}
                    className="flex justify-center items-center"
                  />
                  <p>Share</p>
                </button>
              </div>
              <div className="text-black  flex items-center justify-center  gap-2 h-8 w-32 rounded-2xl font-bold text-lg bg-gray-500 ">
                <button className="flex items-center justify-center gap-2  rounded-2xl font-bold text-lg bg-gray-500">
                  <FontAwesomeIcon
                    icon={faDownload}
                    className="flex justify-center items-center"
                  />
                  <p>Download</p>
                </button>
              </div>
              <div className="text-black  flex items-center justify-center  gap-2 h-8 w-8 rounded-2xl font-bold text-lg bg-gray-500 ">
                <button className="flex items-center justify-center gap-2  rounded-2xl font-bold text-lg bg-gray-500">
                  <FontAwesomeIcon
                    icon={faEllipsis}
                    className="flex justify-center items-center"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchPage;
