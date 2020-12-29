import styled, { css } from "styled-components";

export const Container = styled.div`
  display: inline-block;
  position: relative;
`;

export const DropdownButton = styled.button`
  align-items: center;
  background: ${(props) => props.theme.colors.white};
  border: none;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  display: flex;
  font-size: 14px;
  height: 30px;
  justify-content: space-between;
  width: 100px;
  padding: 10px;
  position: relative;

  ${(props) =>
    props.open &&
    css`
      background: ${(props) => props.theme.colors.lightGray};
      color: ${(props) => props.theme.colors.mediumLightGray};
    `}
`;

export const DropdownContent = styled.div`
  align-items: flex-start;
  background: ${(props) => props.theme.colors.white};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100px;
  position: absolute;
  z-index: 1;

  ul {
    list-style: none;

    li {
      font-size: 14px;
      text-decoration: none;
      padding: 10px;
    }
  }

  ${(props) =>
    props.open &&
    css`
      border-top: 1px solid ${(props) => props.theme.colors.mediumLightGray};
    `}
`;

export const Box = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  height: 100vh;
  width: 100vw;
`;
