import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="">
      <div className="flex item-center gap-1 font-bold">
        <img
          className="w-7 h-7"
          src="https://imgs.search.brave.com/9IEl1PF7dviJo9V_Hf6HnBZmDE6Dx7SnKUsz62u5ddM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8x/LzEyL1VzZXJfaWNv/bl8yLnN2Zw.svg"
          alt="profile"
        />
        <div>
          <span className="text-sm">{name}</span>
        </div>
      </div>
      <span className="text-sm px-8">{message}</span>
    </div>
  );
};

export default ChatMessage;
