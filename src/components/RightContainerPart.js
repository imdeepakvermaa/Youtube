import React from "react";
import RightContainerData from "./RightContainerData";
import ButtonLists from "./ButtonLists";

const RightContainerPart = () => {
  return (
    <div>
      <div className="">
        <ButtonLists/>
      </div>
      <div className=" grid lg:grid-cols-3 md:grid-cols-2  sm:grid-cols-1 gap-14  p-8 mx-16">
        <RightContainerData />
        <RightContainerData />
        <RightContainerData />
        <RightContainerData />
        <RightContainerData />
        <RightContainerData />
        <RightContainerData />
        <RightContainerData />
        <RightContainerData />
        <RightContainerData />
        <RightContainerData />
        <RightContainerData />
        <RightContainerData />
        <RightContainerData />
        <RightContainerData />
        <RightContainerData />
      </div>
    </div>
  );
};

export default RightContainerPart;
