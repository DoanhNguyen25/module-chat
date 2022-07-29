import styled from "styled-components";

export const MessageBoxWrapper = styled.div`
  width: 20.5rem;
  min-height: 28.4375rem;
  background: blue;
  position: absolute;
  bottom: 0;
  right: 5rem;
  z-index: 1;

  .message__box--header {
    width: 100%;
    height: 3rem;
    /* background: red; */
    .header__info {
      width: 100%;
      display: flex;
      justify-content: space-between;
      height: 100%;
      &--avatar {
        width: 50%;
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
  }

  .message__box--features {
    width: 100%;
  }
`;
