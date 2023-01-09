import React from "react";
import add from "../images/add-friend.png";
import call from "../images/video.png";
import more from "../images/more.png";
import Messages from "./Messages";
import Input from "./Input";

const Chat = () => {
  return (
    <div className="chat">
      <div className="chat-info">
        <span>Aniket</span>
        <div className="chat-icon">
          <img src={add} alt="add-user" />
          <img src={call} alt="call" />
          <img src={more} alt="more" />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
