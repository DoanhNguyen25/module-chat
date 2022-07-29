import styled from "styled-components";

export const MessageItemWrapper = styled.div`
  display: flex;
  margin-bottom: 0.5rem;
  align-items: center;
  padding: 0.25rem;
  border-radius: 0.625rem;
  justify-content: space-between;
  &:hover {
    background: gray;
    cursor: pointer;
  }

  .message__item--avatar {
    width: 20%;
    overflow: hidden;
    img {
      width: 3rem;
      height: 3rem;
      object-fit: cover;
      border-radius: 50%;
    }
  }

  .message__item--content {
    width: calc(100% - 20%);
    text-align: left;
    padding-left: 0.7rem;
    .message--name {
      font-weight: bold;
      font-size: 0.75rem;
    }
    .message--detail {
      font-size: 0.7rem;
    }
  }
`;
