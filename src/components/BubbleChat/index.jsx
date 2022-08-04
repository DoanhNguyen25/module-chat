import React from "react";
import { useState } from "react";
import { FaRegCommentDots, FaRegUser } from "react-icons/fa";
import MessageItem from "../MessageItem";
import { BubbleChatWrapper, Title } from "./style";
import { ListMessage } from "../../data/fakeData";
import useOuterClick from "../../hooks/useOuterClick";
const BubbleChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropDown = () => {
    setIsOpen(!isOpen);
  };

  // const innerRef = useOuterClick((e) => {
  //   console.log(e.target);
  // });
  return (
    <BubbleChatWrapper isOpen={isOpen}>
      <div className="message--icon" onClick={toggleDropDown}>
        <FaRegCommentDots />
        <span className="message--count">12</span>
      </div>
      <div className="user-info">
        <div className="user-info--icon">
          <FaRegUser />
        </div>
        <span className="user-info--username">DoanhNguyeen</span>
      </div>

      <div className="message--dropdown" >
        <Title>Chat</Title>
        <div className="message__search">
          <input type="text" placeholder="Tìm kiếm" />
        </div>
        <div className="message__list">
          {ListMessage.map((message) => (
            <MessageItem key={message.id} item={message} />
          ))}
        </div>
      </div>
    </BubbleChatWrapper>
  );
};

export default BubbleChat;
