import React from "react";
import Cam from "../assets/cam.png";
import Add from "../assets/add.png";
import More from "../assets/more.png";
import MessageList from "./MessageList";
import Input from "./Input";

const Chat = () => {
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>Jane</span>
        <div className="chatIcons">
          <img src={Cam} alt="" />
          <img src={Add} alt="" />
          <img src={More} alt="" />
        </div>
      </div>
      <MessageList />
      <Input />
    </div>
  );
};

export default Chat;
