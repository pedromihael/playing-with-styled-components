import React, { useState, useCallback } from "react";

import { Box, TooltipBalloon, Container, Children } from "./styles";

export default function Balloon({ children, label, direction }) {
  const [tooltipOpen, setTooltipOpen] = useState(false);

  const handleShowTooltip = useCallback(() => {
    setTooltipOpen(!tooltipOpen);
  }, [tooltipOpen]);

  return (
    <>
      <Box>
        <Children onMouseOver={handleShowTooltip}>{children}</Children>
        <Container tooltipOpen={tooltipOpen}>
          <TooltipBalloon direction={direction}>
            <span>{label}</span>
          </TooltipBalloon>
        </Container>
      </Box>
    </>
  );
}
