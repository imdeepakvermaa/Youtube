import React from "react";
import LeftContainerPart from "./LeftContainerPart";
import RightContainerPart from "./RightContainerPart";

const MainContainer = () => {
  return (
    <div className="flex">
      <div className="w-[200px] ">
        <LeftContainerPart />
      </div>

      <div>
        <RightContainerPart />
      </div>
    </div>
  );
};

export default MainContainer;
