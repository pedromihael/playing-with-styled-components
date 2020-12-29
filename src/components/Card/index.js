import React from "react";

import {
  Avatar,
  Box,
  Container,
  Content,
  CardImage,
  ActionButton
} from "./styles";

export default function Card({ image }) {
  return (
    <Box>
      <Container>
        <CardImage
          image={
            "https://images.pexels.com/photos/3380877/pexels-photo-3380877.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          }
        />
        <Content>
          <head>
            <Avatar
              image={
                "https://avataaars.io/?avatarStyle=Transparent&topType=LongHairStraight&accessoriesType=Prescription02&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light"
              }
            />
            <div className="card-title">
              <h5>Tokyo, Japan</h5>
              <span>Vivian's next trip</span>
            </div>
          </head>
          <main>
            <p>
              Capital of Japan, Tokyo is one of the most populous cities in the
              world. Their cuisine is totally different from what we are used
              to.
            </p>
          </main>
          <footer>
            <ActionButton>See more</ActionButton>
          </footer>
        </Content>
      </Container>
    </Box>
  );
}
