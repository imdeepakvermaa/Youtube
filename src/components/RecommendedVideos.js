import React, { useEffect, useState } from "react";
import RightContainerData from "./RightContainerData";
import { RECOMMENDED_YT_API } from "../utils/constants";
import { Link } from "react-router-dom";
import Buttons from "./Buttons";
import RecommendedVideosData from "./RecommendedVideosData";

const RecommendedVideos = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(RECOMMENDED_YT_API);
    const json = await data.json();
    setVideos(json.items);
  };
  return (
    <div className="">
      <div className="">
        {videos.map((video) => (
          <div className="">
            <Link to={"/watch?v=" + video.id}>
              <RecommendedVideosData className="" key={video.id} info={video} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendedVideos;
