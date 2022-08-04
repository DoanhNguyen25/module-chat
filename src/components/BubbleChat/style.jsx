import styled from "styled-components";

export const BubbleChatWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0rem 3rem;
  align-items: center;
  height: 100%;

  .message--icon {
    margin-right: 2rem;
    font-size: 1.5rem;
    position: relative;
    cursor: pointer;
    .message--count {
      position: absolute;
      font-size: 0.75rem;
      color: red;
      font-weight: bold;
    }
  }

  .user-info {
    display: flex;
    align-items: center;

    &--icon {
      width: 1.6rem;
      height: 1.6rem;
      border-radius: 50%;
      border: 2px solid #000;
      font-size: 1.25rem;
      margin-right: 0.5rem;
    }
  }

  .message--dropdown {
    width: 18rem;
    height: 20rem;
    background: #fff;
    position: absolute;
    top: 2.65rem;
    right: 1rem;
    border-radius: 1rem;
    display: ${(props) => (props.isOpen ? "block" : "none")};
    transition: all 0.2s;
    padding: 0.5rem 0.5rem;
    overflow: auto;
    &::-webkit-scrollbar-track {
      -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      border-radius: 10px;
      background-color: #f5f5f5;
    }
    &::-webkit-scrollbar {
      width: 12px;
      background-color: #f5f5f5;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 10px;
      -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      background-color: #d62929;
    }

    .message__search {
      width: 100%;
      height: 2rem;
      background: #f2f2f2;
      border-radius: 0.625rem;
      margin-bottom: 0.5rem;

      input[type="text"] {
        width: 90%;
        height: 100%;
        border: none;
        outline: none;
        background: transparent;
      }
    }
  }
`;

export const Title = styled.div`
  text-align: left;
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;
