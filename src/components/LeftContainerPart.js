import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faPlay,
  faScroll,
  faStopwatch,
  faTv,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
const LeftContainerPart = () => {
  const contentItems = [
    { name: "Home", icon: faHouse },
    { name: "Shorts", icon: faYoutube },
    { name: "Subscriptions", icon: faTv },
    { name: "Your channel", icon: faUser },
    { name: "History", icon: faScroll },
    { name: "Your videos", icon: faPlay },
    { name: "Watch later", icon: faStopwatch },
    { name: "Watch later", icon: faStopwatch },
  ];
  return (
    <div className="flex flex-col gap-7 mt-10">
      {contentItems.map((items, index) => (
        <div className="flex  items-center text-white ml-5 gap-7">
          <div>
            <FontAwesomeIcon icon={items.icon} className="h-5" />
          </div>
          <div>
            <p>{items.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LeftContainerPart;
