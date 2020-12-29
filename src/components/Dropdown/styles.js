import styled, { css } from "styled-components";

export const Container = styled.div`
  display: inline-block;
  position: relative;
`;

export const DropdownButton = styled.button`
  align-items: center;
  background: ${(props) => props.theme.light.colors.white};
  border: none;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  cursor: pointer;
  display: flex;
  font-size: 14px;
  height: 30px;
  justify-content: space-between;
  width: 100px;
  padding: 10px;
  position: relative;

  svg {
    transform: rotate(0);
    transition: all 250ms ease-in;
  }

  ${(props) =>
    props.open &&
    css`
      background: ${(props) => props.theme.light.colors.lightGray};
      color: ${(props) => props.theme.light.colors.mediumDarkGray};

      svg {
        transform: rotate(-180deg);
      }
    `}
`;

export const DropdownContent = styled.div`
  align-items: flex-start;
  background: ${(props) => props.theme.light.colors.white};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  display: flex;
  flex-direction: column;
  justify-content: center;
  left: 50%;
  opacity: 0.25;
  position: absolute;
  transform: translateX(-50%) rotateX(-90deg);
  transform-origin: top center;
  transition: all 100ms ease-in;
  width: 100px;
  z-index: 1;

  ul {
    list-style: none;
    width: 100%;

    li {
      cursor: pointer;
      font-size: 14px;
      padding: 10px;
      text-decoration: none;

      &:hover {
        background: ${(props) => props.theme.light.colors.mediumLightGray};
      }
    }
  }

  ${(props) =>
    props.open &&
    css`
      border-top: 1px solid
        ${(props) => props.theme.light.colors.mediumLightGray};
      opacity: 1;
      transform: translateX(-50%) rotateX(0);
      transition-timing-function: ease-out;
    `}
`;
