import React from "react";
import { MessageBoxWrapper } from "./style";
import {
  FaWindowMinimize,
  FaTimes,
  FaRegFile,
  FaTelegramPlane,
} from "react-icons/fa";
import { useState } from "react";
import { FaRegSmile } from "react-icons/fa";
const MessageBox = ({ ...props }) => {
  const [message, setMessage] = useState("");
  const handleOnchange = (e) => {
    setMessage(e.currentTarget.textContent);
  };
  return (
    <MessageBoxWrapper status={props.status}>
      <div className="message__box--header">
        <div className="header__info">
          <div
            className="header__info--avatar"
            onClick={() => props.handleMessageBox("expand")}
          >
            <img
              src="https://res.cloudinary.com/dchzdgm6r/image/upload/v1658397078/cjgweog9z5ue0nli1lle.jpg"
              alt="avatar"
            />
            <span>Doanh Nguyễn</span>
          </div>
          <div className="header__info--btn">
            <button onClick={() => props.handleMessageBox("collapse")}>
              <FaWindowMinimize />
            </button>

            <button onClick={() => props.handleMessageBox("expand")}>
              <FaTimes />
            </button>
          </div>
        </div>
      </div>
      <div className="message__box--display">
        <div style={{ padding: "0 1rem" }}>
          <div className="message__box--message">
            <div className="message--avatar">
              <img
                src="https://res.cloudinary.com/dchzdgm6r/image/upload/v1658397078/cjgweog9z5ue0nli1lle.jpg"
                alt="avatar1"
              />
            </div>
            <div className="message--content">
              kssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss
            </div>
            <div className="message--reaction">
              <FaRegSmile />
            </div>
          </div>
        </div>
      </div>
      <div className="message__box--features">
        <div className="features__utilities">
          <div className="utilities--icon">...</div>
          <div className="utilities--icon">
            <FaRegFile />
          </div>
          <div className="utilities--icon">GIF</div>
        </div>
        <div className="features__input">
          <div contenteditable="true" onInput={handleOnchange}></div>
          <div className="features__input--emoji">
            <FaRegSmile />
          </div>
        </div>
        <div className="features--send" onClick={() => console.log(message)}>
          <FaTelegramPlane />
        </div>
      </div>
    </MessageBoxWrapper>
  );
};

export default MessageBox;
