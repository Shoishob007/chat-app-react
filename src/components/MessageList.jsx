import React, { useContext, useEffect, useState } from "react";
import Message from "./Message";
import { ChatContext } from "../context/ChatContext.jsx";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import groupMessages from "../functions/groupMessage.jsx";
import getDateTitle from "../functions/DateTitle.jsx";

const MessageList = () => {
  const [messages, setMessages] = useState([]);
  const { data } = useContext(ChatContext);

  useEffect(() => {
    const unSub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
      doc.exists() && setMessages(doc.data().messages);
    });

    return () => {
      unSub();
    };
  }, [data.chatId]);

  const groupedMessages = groupMessages(messages);

  return (
    <div className="messageList">
      {Object.entries(groupedMessages).map(([date, msgs]) => (
        <div className="groupMessage" key={date}>
          <h2>{getDateTitle(date)}</h2>
          {msgs.map((msg) => (
            <Message message={msg} key={msg.id} />
          ))}
        </div>
      ))}
    </div>
  );
};

// Function to get the title for the date group

export default MessageList;
