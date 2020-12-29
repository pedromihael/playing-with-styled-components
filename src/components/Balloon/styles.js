import styled, { css } from "styled-components";

const directions = ["bottom", "top", "right", "left"];

export const Children = styled.div`
  position: relative;
  display: flex;
`;

export const Container = styled.div`
  position: absolute;
  display: none;
  transform: translateX(calc(100% + 110px));

  ${(props) =>
    props.tooltipOpen &&
    css`
      display: flex;
    `}
`;

export const TooltipBalloon = styled.div`
  align-items: center;
  background: ${(props) => props.theme.light.colors.mediumDarkGray};
  border-radius: 2px;
  color: ${(props) => props.theme.light.colors.iceWhite};
  display: flex;
  height: 30px;
  justify-content: center;
  opacity: 0.8;
  padding: 10px;
  position: relative;
  max-width: 100px;

  span {
    font-size: 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  &:after {
    content: "";
    border-style: solid;
    border-width: 10px;
    position: absolute;
  }

  ${(props) =>
    props.direction === "bottom" &&
    css`
      &:after {
        border-color: ${(props) => props.theme.light.colors.mediumDarkGray}
          transparent transparent transparent;
        left: 50%;
        margin-left: -10px;
        top: 100%;
      }
    `};

  ${(props) =>
    props.direction === "left" &&
    css`
      &:after {
        border-color: transparent transparent
          ${(props) => props.theme.light.colors.mediumDarkGray} transparent;
        left: 0;
        margin-left: -10px;
        top: calc(100% - 20px);
      }
    `};

  ${(props) =>
    props.direction === "right" &&
    css`
      &:after {
        border-color: transparent transparent
          ${(props) => props.theme.light.colors.mediumDarkGray} transparent;
        right: 0;
        margin-right: -10px;
        top: calc(100% - 20px);
      }
    `};

  ${(props) =>
    props.direction === "top" &&
    css`
      &:after {
        border-color: transparent transparent
          ${(props) => props.theme.light.colors.mediumDarkGray} transparent;
        left: 50%;
        margin-left: -10px;
        top: -20px;
      }
    `};

  ${(props) =>
    (!props.direction ||
      !directions.some((direction) => props.direction === direction)) &&
    css`
      &:after {
        display: none;
      }
    `};
`;

export const Box = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`;
