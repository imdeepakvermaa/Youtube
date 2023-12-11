import React from "react";

const Button = ({name}) => {
  return (
    <div>
      <button className="flex justify-center items-center px-5 font-medium m-5 bg-gray-300 text-black rounded-xl">{name}</button>
    </div>
  );
};

export default Button;
