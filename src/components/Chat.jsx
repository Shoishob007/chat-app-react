import React, { useContext } from "react";
import MessageList from "./MessageList";
import Input from "./Input";
import { ChatContext } from "../context/ChatContext";
import VideoSVG from "../assets/svg/videoIcon";
import AudioSVG from "../assets/svg/audioIcon";
import MenuSVG from "../assets/svg/menuIcon";

const Chat = () => {
  const { data } = useContext(ChatContext);

  return (
    <div className="chat">
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
        <div className="chatIcons">
          <VideoSVG />
          <AudioSVG />
          <MenuSVG />
        </div>
      </div>
      <MessageList />
      <Input />
    </div>
  );
};

export default Chat;
