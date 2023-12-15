// Head.js
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faMagnifyingGlass,
  faMicrophone,
  faVideo,
  faBell,
  faUser,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { NavMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestion, setSuggestion] = useState(false);
  useEffect(() => {
    console.log(searchQuery);

    const timer = setTimeout(() => getSearchSuggestions(), 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    console.log(json[1]);
    setSuggestions(json[1]);
  };

  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(NavMenu());
  };
  return (
    <div className="m-2 p-2 text-white">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-16 ml-8 mr-8 ">
        <div className="flex gap-6">
          <div>
            <FontAwesomeIcon
              onClick={toggleMenuHandler}
              icon={faBars}
              className="h-5 cursor-pointer"
            />
          </div>
          <div>
            <img
              src="https://imgs.search.brave.com/gGkRJVq1V6RZri5qx1sKpiXZhyahy5o8pj6T8Mw2v_4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9i/L2I4L1lvdVR1YmVf/TG9nb18yMDE3LnN2/Zw.svg"
              alt="Website-logo"
              className="w-24 text-white"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center">
          <div>
            <div className="flex justify-center items-center">
              <input
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setSuggestion(true)}
                onBlur={() => setSuggestion(false)}
                type="text"
                placeholder="Search"
                className="w-full md:w-[500px] h-9 bg-gray-600 text-black rounded-l-2xl ring-0 focus:ring-0 shadow-none focus:shadow-none focus:outline-none border-none focus:border-none"
              />
              <div className="flex justify-center items-center w-10 h-9 border-gray-400 bg-gray-600 text-white rounded-r-2xl">
                <FontAwesomeIcon icon={faMagnifyingGlass} className="h-5" />
              </div>
            </div>
            <div>
              <div className="">
                {showSuggestion && (
                  <p className="fixed bg-gray-800 rounded-xl w-[500px] flex flex-col justify-center mt-2 ">
                    {suggestions.map((s) => (
                      <p
                        key={s}
                        className="font-semibold text-base px-5 mb-3 hover:bg-gray-700 "
                      >
                        <FontAwesomeIcon className="mr-3" icon={faSearch} /> {s}
                      </p>
                    ))}
                  </p>
                )}
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <FontAwesomeIcon icon={faMicrophone} className="h-6" />
          </div>
        </div>

        <div className="flex justify-center items-center gap-4 md:gap-8">
          <FontAwesomeIcon icon={faVideo} className="h-5" />
          <FontAwesomeIcon icon={faBell} className="h-5" />
          <FontAwesomeIcon icon={faUser} className="h-5" />
        </div>
      </div>
    </div>
  );
};

export default Head;
