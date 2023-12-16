import React, { useEffect, useState } from "react";
import RightContainerData from "./RightContainerData";
import ButtonLists from "./ButtonLists";
import { YOUTUBE_API } from "../utils/constants";
import { Link } from "react-router-dom";

const RightContainerPart = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_API);
    const json = await data.json();
    setVideos(json.items);
  };
  return (
    <div className="absolute ml-[230px] mt-12">
        <ButtonLists />
        <div className="grid lg:grid-cols-3 md:grid-cols-2  sm:grid-cols-2 ">
          {videos.map((video) => (
            <div className="mx-4 my-3">
              <Link to={"/watch?v=" + video.id}>
                <RightContainerData className="" key={video.id} info={video} />
              </Link>
            </div>
          ))}
        </div>
        </div>
  );
};

export default RightContainerPart;
