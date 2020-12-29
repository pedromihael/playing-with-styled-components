import styled from "styled-components";

export const Content = styled.div`
  align-items: center;
  background: ${(props) => props.theme.colors.lightGray};
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
  background: url(${(props) => props.avatar});
  background-size: contain;
  border-radius: 100%;
  height: 25px;
  width: 25px;
`;

export const CloseIcon = styled.button`
  align-items: center;
  background: ${(props) => props.theme.colors.mediumLightGray};
  border: none;
  border-radius: 100%;
  display: flex;
  height: 15px;
  justify-content: center;
  width: 15px;

  svg {
    height: 60%;

    path {
      fill: ${(props) => props.theme.colors.mediumDarkGray};
    }
  }
`;

export const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  height: 100vh;
  width: 100vw;
`;
