import React from "react";
import { FaTimes } from "react-icons/fa";

import { Container, Avatar, CloseIcon } from "./styles";
export default function Chip({ text, closeable, avatar }) {
  return (
    <>
      <Container closeable={closeable}>
        <Avatar avatar={avatar} />
        <span>{text}</span>
        {closeable && (
          <CloseIcon>
            <FaTimes />
          </CloseIcon>
        )}
      </Container>
    </>
  );
}
