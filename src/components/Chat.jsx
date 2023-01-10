import React from "react";
import add from "../images/add-friend.png";
import call from "../images/video.png";
import more from "../images/more.png";
import Messages from "./Messages";
import Input from "./Input";
import { useContext } from "react";
import { ChatContext } from "../context/ChatContext";

 

const Chat = () => {
   const { data } = useContext(ChatContext);
  return (
    <div className="chat">
      <div className="chat-info">
      <span>{data.user?.displayName}</span>
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
