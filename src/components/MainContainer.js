import React from "react";
import LeftContainerPart from "./LeftContainerPart";
import RightContainerPart from "./RightContainerPart";

const MainContainer = () => {
  return (
    <div className="flex">
      <div className="w-[260px] ">
        <LeftContainerPart />
      </div>

      <div className="">
        <RightContainerPart />
      </div>
    </div>
  );
};

export default MainContainer;
