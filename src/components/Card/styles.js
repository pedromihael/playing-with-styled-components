import styled from "styled-components";

export const Container = styled.div`
  background: ${(props) => props.theme.light.colors.white};
  border-radius: 2px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  flex-direction: column;
  min-height: 350px;
  position: relative;
  width: 260px;
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
  align-items: flex-start;
  bottom: 0;
  display: flex;
  flex-direction: column;
  height: calc(100% - 156px);
  padding: 0 15px;
  position: absolute;
  width: 100%;

  head {
    align-items: center;
    display: flex;
    justify-content: flex-start !important;
    padding-top: 20px;
    position: relative;
    width: 100%;

    div.card-title {
      display: flex;
      flex-direction: column;
      padding-left: 15px;

      span {
        color: ${(props) => props.theme.light.colors.mediumLightGray};
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
    bottom: 0;
    padding: 15px 10px 5px 15px;
    position: absolute;
    right: 0;
  }
`;

export const Avatar = styled.div`
  background: url(${(props) => props.image});
  background-size: contain;
  border-radius: 100%;
  cursor: pointer;
  height: 40px;
  width: 40px;
`;

export const ActionButton = styled.button`
  background: transparent;
  border: none;
  color: ${(props) => props.theme.light.colors.mediumDarkGray};
  cursor: pointer;
  padding: 5px;
  text-transform: uppercase;

  &:hover {
    background: ${(props) => props.theme.light.colors.lightGray};
    border-radius: 2px;
  }
`;
