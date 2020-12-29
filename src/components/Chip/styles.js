import styled, { css } from "styled-components";

export const Container = styled.div`
  align-items: center;
  background: ${(props) => props.theme.light.colors.lightGray};
  border-radius: 50px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  display: flex;
  height: 30px;
  justify-content: ${(props) =>
    props.closeable ? `space-between` : `flex-start`};
  padding: 5px;
  position: relative;
  width: 120px;

  span {
    font-size: 14px;
    max-width: calc(100% - 5px - 5px - 20px - 20px);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    ${(props) =>
      !props.closeable &&
      css`
        left: 40%;
        position: absolute;
      `}
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
  background: ${(props) => props.theme.light.colors.mediumLightGray};
  border: none;
  border-radius: 100%;
  cursor: pointer;
  display: flex;
  height: 15px;
  justify-content: center;
  width: 15px;

  svg {
    height: 60%;

    path {
      fill: ${(props) => props.theme.light.colors.mediumDarkGray};
    }
  }
`;
