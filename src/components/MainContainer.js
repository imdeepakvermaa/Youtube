import React from "react";
import LeftContainerPart from "./LeftContainerPart";
import RightContainerPart from "./RightContainerPart";

const MainContainer = () => {
  return (
    <div className="flex">
      <div className="w-[260px] fixed ">
        <LeftContainerPart />
      </div>

      <div className="max-w-full ml-72">
        <RightContainerPart />
      </div>
    </div>
  );
};

export default MainContainer;
