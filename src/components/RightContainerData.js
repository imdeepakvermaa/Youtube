import React from 'react';

// Function to format view count
const formatViewCount = (count) => {
  if (count >= 1e6) {
    return `${(count / 1e6).toFixed(1)}M`;
  } else if (count >= 1e3) {
    return `${(count / 1e3).toFixed(1)}K`;
  } else {
    return count.toString();
  }
};

const RightContainerData = ({ info }) => {
  if (!info) {
    return <div className="text-white">Loading...</div>;
  }

  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="w-400px">
      <div className="flex flex-col">
        <img
          className="h-[290px] w-[400px] rounded-xl"
          src={thumbnails?.high?.url}
          alt="thumbnail"
        />
        <div className="flex justify-center items-center gap-3 -mt-7">
          <img
            className="h-[40px] w-10 rounded-[600px]  "
            src={thumbnails?.high?.url}
            alt="logo"
          />
          <div className="text-white ">
            <div className="font-medium text-md">
              <p>{title}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center ml-12">
        <div className="text-gray-300">
          <p>{channelTitle}</p>
          <p>{formatViewCount(statistics.viewCount)} Views</p>
        </div>
      </div>
    </div>
  );
};

export default RightContainerData;
