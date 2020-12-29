import React from "react";
import { ThemeProvider } from "styled-components";

import theme from "./styles/theme";
import GlobalStyle from "./styles/global";

import Chip from "./components/Chip";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="App">
        <Chip />
      </div>
    </ThemeProvider>
  );
}
