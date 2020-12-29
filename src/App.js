import React, { useMemo } from "react";
import { ThemeProvider } from "styled-components";

import theme from "./styles/theme";
import GlobalStyle from "./styles/global";

import Chip from "./components/Chip";
import Card from "./components/Card";
import Dropdown from "./components/Dropdown";
import Balloon from "./components/Balloon";

import { Container } from "./styles";

const options = [
  { label: "one", value: 1 },
  { label: "two", value: 2 },
  { label: "three", value: 3 }
];

export default function App() {
  const user = useMemo(() => {
    return {
      name: "Vivian",
      avatar:
        "https://avataaars.io/?avatarStyle=Transparent&topType=LongHairStraight&accessoriesType=Prescription02&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light",
      destination: {
        place: "Tokyo, Japan",
        description:
          "Capital of Japan, Tokyo is one of the most populous cities in the world. Their cuisine is totally different from what we are used to.",
        image:
          "https://images.pexels.com/photos/3380877/pexels-photo-3380877.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      }
    };
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <head>
          <Chip avatar={user.avatar} text={user.name} closeable />
          <Dropdown label={"Dropdown"} options={options} />
        </head>
        <main>
          <Balloon direction="left" label={"This is a card"}>
            <Card
              actionButton="See more"
              avatar={user.avatar}
              description={user.destination.description}
              image={user.destination.image}
              subtitle={`${user.name}'s next trip`}
              title={user.destination.place}
            />
          </Balloon>
        </main>
      </Container>
    </ThemeProvider>
  );
}
