import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faFilm,
  faFire,
  faGamepad,
  faHouse,
  faLightbulb,
  faMusic,
  faNewspaper,
  faPlay,
  faPodcast,
  faScroll,
  faShirt,
  faStopwatch,
  faTrophy,
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
  ];

  const ExploreItems = [
    { name: "Trending", icon: faFire },
    { name: "Shopping", icon: faBagShopping },
    { name: "Music", icon: faMusic },
    { name: "Film", icon: faFilm },
    { name: "Gaming", icon: faGamepad },
    { name: "News", icon: faNewspaper },
    { name: "Sports", icon: faTrophy },
    { name: "Learning", icon: faLightbulb },
    { name: "Fashion & Beauty", icon: faShirt },
    { name: "Podcast", icon: faPodcast },
  ];

  return (
    <div className="max-h-[900px] overflow-y-auto scrollbar-thin scrollbar-thumb-black">
      <div className="flex flex-col gap-7 mt-10">
        {contentItems.map((items, index) => (
          <div key={index} className="flex items-center text-white ml-5 gap-7">
            <div>
              <FontAwesomeIcon icon={items.icon} className="h-5" />
            </div>
            <div>
              <p>{items.name}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-9">
        <h2 className="text-white text-xl font-bold ml-5">Explore</h2>
        <div className="flex flex-col gap-7 mt-6">
          {ExploreItems.map((items, index) => (
            <div key={index} className="flex items-center text-white ml-5 gap-7">
              <div>
                <FontAwesomeIcon icon={items.icon} className="h-5" />
              </div>
              <div>
                <p>{items.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeftContainerPart;
