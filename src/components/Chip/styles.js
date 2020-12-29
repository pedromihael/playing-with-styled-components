import styled from "styled-components";

export const Content = styled.div`
  align-items: center;
  background: #e5e5e5;
  border-radius: 50px;
  display: flex;
  height: 30px;
  justify-content: space-between;
  padding: 5px;
  width: 120px;

  span {
    font-size: 14px;
    max-width: calc(100% - 5px - 5px - 20px - 20px);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

export const Avatar = styled.div`
  background: #3e6680;
  border-radius: 100%;
  height: 25px;
  width: 25px;

  img {
    border-radius: 100%;
    height: 100%;
    width: 100%;
  }
`;

export const CloseIcon = styled.button`
  background: #848484;
  border: none;
  border-radius: 100%;
  height: 15px;
  width: 15px;
`;

export const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  height: 100vh;
  width: 100vw;
`;
