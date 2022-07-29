import React from "react";
import { MessageItemWrapper } from "./style";
const MessageItem = ({ item }) => {
  return (
    <MessageItemWrapper>
      <div className="message__item--avatar">
        <img src={item.avatar} alt="avatar" />
      </div>
      <div className="message__item--content">
        <div className="message--name">{item.account || ""}</div>
        <div className="message--detail">{item.message || ""}</div>
      </div>
    </MessageItemWrapper>
  );
};

export default MessageItem;
