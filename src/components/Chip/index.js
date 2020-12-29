import React from "react";
import { FaTimes } from "react-icons/fa";

import { Container, Content, Avatar, CloseIcon } from "./styles";

export default function Chip({ text, closeable = true }) {
  return (
    <>
      <Container>
        <Content>
          <Avatar
            avatar={
              "https://avataaars.io/?avatarStyle=Transparent&topType=LongHairStraight&accessoriesType=Prescription02&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light"
            }
          />
          <span>{text || "Person"}</span>
          {closeable && (
            <CloseIcon>
              <FaTimes />
            </CloseIcon>
          )}
        </Content>
      </Container>
    </>
  );
}
