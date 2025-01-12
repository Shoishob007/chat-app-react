const groupMessages = (messages) => {
  const groupedMessages = {};
  messages.forEach((msg) => {
    const msgDate = msg.date.toDate(); // Convert Firebase timestamp to JavaScript Date object
    const dateKey = msgDate.toDateString(); 
    if (!groupedMessages[dateKey]) {
      groupedMessages[dateKey] = [];
    }
    groupedMessages[dateKey].push(msg);
  });
  return groupedMessages;
};

export default groupMessages;
