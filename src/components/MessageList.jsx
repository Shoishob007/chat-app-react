import React, { useContext, useEffect, useState } from "react";
import Message from "./Message";
import { ChatContext } from "../context/ChatContext.jsx";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";

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

  // Function to group messages by date
  const groupMessagesByDate = (messages) => {
    const groupedMessages = {};
    messages.forEach((msg) => {
      const msgDate = msg.date.toDate(); // Convert Firebase timestamp to JavaScript Date object
      const dateKey = msgDate.toDateString(); // Get date string (e.g., "Sat Feb 12 2022")
      if (!groupedMessages[dateKey]) {
        groupedMessages[dateKey] = [];
      }
      groupedMessages[dateKey].push(msg);
    });
    return groupedMessages;
  };

  const groupedMessages = groupMessagesByDate(messages);

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
const getDateTitle = (dateString) => {
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);

  const messageDate = new Date(dateString);
  if (
    messageDate.getDate() === today.getDate() &&
    messageDate.getMonth() === today.getMonth() &&
    messageDate.getFullYear() === today.getFullYear()
  ) {
    return "Today";
  } else if (
    messageDate.getDate() === yesterday.getDate() &&
    messageDate.getMonth() === yesterday.getMonth() &&
    messageDate.getFullYear() === yesterday.getFullYear()
  ) {
    return "Yesterday";
  } else {
    return dateString; // Return full date string for other dates
  }
};

export default MessageList;
