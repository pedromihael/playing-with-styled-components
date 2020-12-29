import React from "react";
import { FaTimes } from "react-icons/fa";

import { Container, Content, Avatar, CloseIcon } from "./styles";

export default function Chip({ text }) {
  return (
    <>
      <Container>
        <Content>
          <Avatar>
            <img
              alt="avatar"
              src="https://avataaars.io/?avatarStyle=Transparent&topType=LongHairStraight&accessoriesType=Prescription02&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light"
            />
          </Avatar>
          <span>{text}</span>
          <CloseIcon>
            <FaTimes />
          </CloseIcon>
        </Content>
      </Container>
    </>
  );
}
