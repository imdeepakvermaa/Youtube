import React, { useEffect, useState } from "react";
import RightContainerData from "./RightContainerData";
import ButtonLists from "./ButtonLists";
import { YOUTUBE_API } from "../utils/constants";

const RightContainerPart = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_API);
    const json = await data.json();
    console.log(json);
    setVideos(json.items);
  };
  return (
    <div>
      <div className="">
        <ButtonLists />
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2  sm:grid-cols-1 gap-14  p-8 ">
        {videos.map((video) => (
          <div className=" ">
            <RightContainerData key={video.id} info={video} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RightContainerPart;
