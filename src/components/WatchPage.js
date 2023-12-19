import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import { Google_API_Key } from "../utils/constants";
import LikesAndTitle from "./LikesAndTitle";
import CommentSection from "./CommentSection";
import LiveChat from "./LiveChat";
import RecommendedVideos from "./RecommendedVideos";

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
          viewCount: statistics.viewCount,
        });
      } catch (error) {
        console.error("Error fetching video details:", error);
      }
    };

    dispatch(closeMenu());
    fetchVideoDetails();
  }, [dispatch, searchParams]);
  return (
    <div className="flex mt-16">
      <div className="text-white px-20 py-4">
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
          <LikesAndTitle />
        </div>

        <div>
          <CommentSection />
        </div>
      </div>

      <div>
        <div>
          <LiveChat />
        </div>
        <div>
          <RecommendedVideos/>
        </div>
      </div>
    </div>
  );
};

export default WatchPage;
