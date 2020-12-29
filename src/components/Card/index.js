import React from "react";

import { Box, Container, Content, CardImage, ActionButton } from "./styles";

export default function Chip({ image }) {
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
            <div className="card-avatar" />
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
