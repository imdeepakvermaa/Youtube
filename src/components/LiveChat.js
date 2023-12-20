import React, { useEffect, useState } from "react";
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
    },900);

    return () => clearInterval(i);
  }, []);

  const [liveMessage,setLiveMessage] = useState("");
  return (
    <div className="text-white mb-3">
      <div>
        <h2 className="font-semibold text-base px-3">Live Chat</h2>
      </div>
      <div className="h-[490px] w-[400px] border border-gray-200 rounded-lg overflow-y-scroll flex flex-col-reverse">
        <div>
          {ChatMessages.map((c, index) => (
            <ChatMessage key={index} name={c.name} message={c.message} />
          ))}
        </div>
      </div>

      <div className="flex  mt-1 text-white gap-1 ">
        <form onSubmit={(e) => {
            e.preventDefault()
            dispatch(addMessage({
              name: "Deepak Verma",
              message: liveMessage,

            }))
            setLiveMessage("")
        }}  >
          <input
            type="text"
            value={liveMessage}
            placeholder="Send Messages..."
            className="w-[320px] h-8 p-2 bg-gray-700 rounded-2xl"
            onChange={(e) => {
              setLiveMessage(e.target.value);
            }}
          />
        </form>
        <div>
          <button className="border border-gray-600 w-[60px] text-black bg-red-600 font-bold h-8 rounded-2xl">Send</button>
        </div>
      </div>
    </div>
  );
};

export default LiveChat;
