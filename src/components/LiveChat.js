import React, { useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import generateRandomName from "../utils/Helper";
import getRandomMessage from "../utils/MessageHelper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const ChatMessages = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const i = setInterval(() => {
      console.log("API polling");
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: getRandomMessage(),
        })
      );
    }, 500);

    return () => clearInterval(i);
  }, []);
  return (
    <div className="text-white  ">
        <div>
            <h2 className="font-semibold text-base px-3  ">Live Chat</h2>
          </div>
      <div className="h-[490px] w-[400px] border border-gray-200 rounded-lg overflow-y-scroll flex flex-col-reverse">
        <div>
          
            {ChatMessages.map((c, index) => (
              <ChatMessage key={index} name={c.name} message={c.message} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default LiveChat;
