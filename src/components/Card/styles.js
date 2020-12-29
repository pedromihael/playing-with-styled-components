import styled from "styled-components";

export const Container = styled.div`
  background: ${(props) => props.theme.colors.white};
  border-radius: 2px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  flex-direction: column;
  height: 350px;
  position: relative;
  width: 260px;
`;

export const Box = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  height: 100vh;
  width: 100vw;
`;

export const CardImage = styled.div`
  background: url(${(props) => props.image}) no-repeat bottom;
  background-size: cover;
  height: 156px;
  position: absolute;
  top: 0;
  width: 100%;
`;

export const Content = styled.div`
  bottom: 0;
  height: calc(100% - 156px);
  position: absolute;
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  padding: 0 15px;

  head {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-top: 20px;
    position: relative;
    width: 100%;

    div.card-title {
      display: flex;
      flex-direction: column;
      padding-left: 15px;

      span {
        color: ${(props) => props.theme.colors.mediumLightGray};
        font-size: 12px;
        padding-top: 2px;
      }
    }
  }

  main {
    p {
      padding-top: 15px;
      font-size: 12px;
    }
  }

  footer {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 15px 10px 5px 15px;
  }
`;

export const Avatar = styled.div`
  background: url(${(props) => props.image});
  background-size: contain;
  border-radius: 100%;
  width: 40px;
  height: 40px;
`;

export const ActionButton = styled.button`
  background: transparent;
  border: none;
  color: ${(props) => props.theme.colors.mediumDarkGray};
  padding: 5px;
  text-transform: uppercase;

  &:hover {
    background: ${(props) => props.theme.colors.lightGray};
    border-radius: 2px;
  }
`;
