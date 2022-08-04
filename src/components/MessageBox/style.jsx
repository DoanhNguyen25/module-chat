import styled from "styled-components";

export const MessageBoxWrapper = styled.div`
  width: 20.5rem;
  min-height: ${(props) => (props.status === "expand" ? "28.4375rem" : "0rem")};
  /* background: blue; */
  position: absolute;
  bottom: 0;
  right: 5rem;
  z-index: 2;

  .message__box--header {
    width: 100%;
    height: 3rem;
    cursor: pointer;
    background: blue;
    .header__info {
      width: 100%;
      display: flex;
      justify-content: space-between;
      height: 100%;
      &--avatar {
        width: 70%;
        height: 100%;
        /* background: yellow; */
        display: flex;
        align-items: center;
        margin-left: 1rem;
        img {
          width: 2rem;
          height: 2rem;
          object-fit: cover;
          border-radius: 50%;
          margin-right: 0.5rem;
        }
        span {
          color: #fff;
        }
      }

      &--btn {
        width: 20%;
        display: flex;
        align-items: center;
        color: #fff;
        /* background: green; */
      }
    }
  }

  .message__box--display {
    width: 100%;
    height: ${(props) => (props.status === "expand" ? "25.4375rem" : "0rem")};
    background: white;
    padding-top: ${(props) => (props.status === "expand" ? "1rem" : "0rem")};

    .message__box--message {
      width: 70%;
      /* height: 2rem; */
      /* background: red; */
      display: ${(props) => (props.status === "expand" ? "flex" : "none")};

      .message--avatar {
        width: 10%;
        /* background: yellow; */
        img {
          width: 1.5rem;
          height: 1.5rem;
          object-fit: cover;
          border-radius: 50%;
        }
      }
      .message--content {
        max-width: calc(100% - 20%);
        background: gray;
        padding: 0.5rem;
        margin: 0 0.25rem;
        display: block;
        border-radius: 1rem;
        text-align: left;
        line-height: 1rem;
        word-break: break-word;
      }
      .message--reaction {
        width: 10%;
        /* background: pink; */
      }
    }
  }

  .message__box--features {
    width: 100%;
    height: ${(props) => (props.status === "expand" ? "auto" : "0rem")};
    border-top: 1px solid gray;
    background: #fff;
    display: flex;
    align-items: center;
    padding: ${(props) =>
      props.status === "expand" ? "0.25rem 0rem" : "0rem"};
    .features__utilities {
      flex: 2;
      display: ${(props) => (props.status === "expand" ? "flex" : "none")};

      .utilities--icon {
        width: 1.5rem;
        height: 1.5rem;
        border-radius: 50%;
        background: gray;
        color: white;
        font-size: 0.75rem;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 0.25rem;
      }
    }

    .features__input {
      flex: 4;
      height: auto;
      display: ${(props) => (props.status === "expand" ? "flex" : "none")};
      background: #d5d1d1;
      align-items: center;
      border-radius: 1rem;
      padding: 0.25rem 0.15rem;
      [contenteditable="true"] {
        background: transparent;
        -moz-box-sizing: border-box;
        border: 1px solid #cbd5dd;
        border-radius: 1rem;
        max-height: 70px;
        max-width: 11rem;
        word-wrap: break-word;
        overflow: auto;
        position: relative;
        width: 100%;
        padding-left: 5px;
        vertical-align: top;
        box-sizing: border-box;
        text-align: left;
        border: none;
        outline: none;
      }
      &--emoji {
        font-size: 1.25rem;
        color: ;
      }
    }
    .features--send {
      flex: 0.75;
      display: ${(props) => (props.status === "expand" ? "flex" : "none")};
      align-items: center;

      justify-content: center;
      font-size: 1.25rem;
      color: blue;
    }
  }
`;
