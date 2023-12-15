import React, { useEffect } from "react";
import ChatMessage from "./ChatMessage";

const LiveChat = () => {
    useEffect(() => {
        const  i = setInterval(() => {
            console.log("API polling");

        },2000);

        return () => clearInterval(i);

    },[]);      
  return (
    <div className="text-white mt-3 ">
      <div className="h-[500px] w-[400px] border border-gray-200 rounded-lg">
        <div>
          <div>
            <h2 className="font-semibold text-base px-3 py-2 ">Live Chat</h2>
          </div>
          <ChatMessage
            name="Deepak Verma"
            message="Your videos are very helpful thank you🙏"
          />
          
        </div>
      </div>
    </div>
  );
};

export default LiveChat;
