import React from "react";
import ChatMessage from "./ChatMessage";

const LiveChat = () => {
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
          <ChatMessage
            name="Deepak Verma"
            message="Your videos are very helpful thank you🙏"
          />
          <ChatMessage
            name="Deepak Verma"
            message="Your videos are very helpful thank you🙏"
          />
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
