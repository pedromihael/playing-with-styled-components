import React, { useState, useCallback } from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";

import { Box, Container, DropdownContent, DropdownButton } from "./styles";

export default function Dropdown() {
  const [open, setOpen] = useState(false);

  const handleOpen = useCallback(() => {
    setOpen(!open);
  }, [open]);

  return (
    <Box>
      <Container>
        <DropdownButton open={open} onClick={handleOpen}>
          Dropdown
          {open ? <FaCaretUp /> : <FaCaretDown />}
        </DropdownButton>
        {open && (
          <DropdownContent open={open}>
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
            </ul>
          </DropdownContent>
        )}
      </Container>
    </Box>
  );
}
