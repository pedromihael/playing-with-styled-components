import React from "react";

import { ActionButton, Avatar, CardImage, Container, Content } from "./styles";

export default function Card({
  actionButton,
  avatar,
  description,
  image,
  subtitle,
  title
}) {
  return (
    <Container>
      <CardImage image={image} />
      <Content>
        <head>
          <Avatar image={avatar} />
          <div className="card-title">
            <h5>{title}</h5>
            <span>{subtitle}</span>
          </div>
        </head>
        <main>
          <p>{description}</p>
        </main>
        <footer>
          {actionButton && <ActionButton>{actionButton}</ActionButton>}
        </footer>
      </Content>
    </Container>
  );
}
