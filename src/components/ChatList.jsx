import React from "react";

const ChatList = () => {
  return (
    <div className="chats">
      <div className="userChat">
        <img
          src="https://images.pexels.com/photos/5611966/pexels-photo-5611966.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
        <div className="userChatInfo">
          <span>Jane</span>
          <p>Hello!</p>
        </div>
      </div>
    </div>
  );
};

export default ChatList;
