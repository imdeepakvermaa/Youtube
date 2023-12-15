import React, { useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import generateRandomName from "../utils/Helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const ChatMessages = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const i = setInterval(() => {
      console.log("API polling");
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: "Making something cool 🚀",
        })
      );
    }, 2000);

    return () => clearInterval(i);
  }, []);
  return (
    <div className="text-white mt-3 ">
      <div className="h-[500px] w-[400px] border border-gray-200 rounded-lg overflow-y-scroll">
        <div>
          <div>
            <h2 className="font-semibold text-base px-3 py-2 ">Live Chat</h2>
          </div>
            {ChatMessages.map((c, index) => (
              <ChatMessage key={index} name={c.name} message={c.message} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default LiveChat;
