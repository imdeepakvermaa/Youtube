import React from "react";

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

const RecommendedVideosData = ({ info }) => {
  if (!info) {
    return <div className="text-white">Loading...</div>;
  }

  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="flex items-center justify-center gap-2 mt-2">
      <div className="rounded-2xl overflow-hidden">
        <img src={thumbnails?.high?.url} alt="" className="w-48 h-32" />
      </div>

      <div className="flex flex-col ">
        <div className="text-white ">
          <div className="font-medium text-sm w-[200px]">
            <p>{title}</p>
          </div>
        </div>

        <div className="text-gray-300 text-xs">
          <p>{channelTitle}</p>
          <p>{formatViewCount(statistics.viewCount)} Views</p>
        </div>
      </div>
    </div>
  );
};

export default RecommendedVideosData;
