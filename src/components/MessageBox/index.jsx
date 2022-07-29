import React from "react";
import { MessageBoxWrapper } from "./style";
import { FaWindowMinimize, FaTimes } from "react-icons/fa";
import { useState } from "react";
const MessageBox = () => {
  const [statusMessageBox, setStatusMessageBox] = useState("close");
  const handleStatusMessageBox = (status) => {
    setStatusMessageBox(status);
  };
  return (
    <MessageBoxWrapper status={statusMessageBox}>
      <div className="message__box--header">
        <div className="header__info">
          <div className="header__info--avatar">
            <img
              src="https://res.cloudinary.com/dchzdgm6r/image/upload/v1658397078/cjgweog9z5ue0nli1lle.jpg"
              alt="avatar"
            />
            <span>Doanh Nguyễn</span>
          </div>
          <div className="header__info--btn">
            <button onClick={() => handleStatusMessageBox("minimize")}>
              <FaWindowMinimize />
            </button>

            <button onClick={() => handleStatusMessageBox("close")}>
              <FaTimes />
            </button>
          </div>
        </div>
      </div>
      <div className="message__box--display"></div>
      <div className="message__box--features">
        <div className="features__utilities"></div>
        <div className="features__input"></div>
      </div>
    </MessageBoxWrapper>
  );
};

export default MessageBox;
