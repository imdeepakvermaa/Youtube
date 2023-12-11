import React, { useEffect } from 'react'
import { YOUTUBE_API } from '../utils/constants';

const RightContainerData = () => {

  useEffect(() => {
    getVideos();
  },[]);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_API);
    const json = await data.json();
    console.log(json);

  };
  return (
    <div className="">
      <div className="h-[300px] w-[300px]">
        <div>
          <div className="">
            <img
              className="h-[130px] w-[300px] rounded-lg"
              src="https://imgs.search.brave.com/X6_M94sws6cRLn9AV90yHActhzCfntUqHTYTLmWV7fw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2IzLzY0/LzhmL2IzNjQ4ZmY4/YjM3NzhmODUyZWQ0/NDEzMWY1YzA3NjRj/LmpwZw"
              alt="thumbnail"
            />
          </div>
        </div>

        <div className="flex flex-col mt-4 justify-center gap-1">
          <div className="">
            <div className="flex justify-center items-center gap-3">
              <img
                className="h-[40px] w-10 rounded-[600px]  "
                src="https://yt3.ggpht.com/RN0szlDOp4eceo7AzCQhd4IhPYKE96xhwzLcRhDM11bhnL1wIgROAH3jy-O--Ywexf7ykQGX=s68-c-k-c0x00ffffff-no-rj"
                alt="logo"
              />
              <div className="text-white ">
                <div className="font-medium text-md">
                  <p>
                    How to make Youtube thumbnail | Must Watch | Growth Channel
                    | Youtube video
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center ml-12">
            <div className="text-gray-300">
              <p>DeepakVerma</p>
              <p>110K views • 1 year ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RightContainerData;
