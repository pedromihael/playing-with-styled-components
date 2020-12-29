import React, { useState, useCallback } from "react";
import { FaCaretDown } from "react-icons/fa";

import { Box, Container, DropdownContent, DropdownButton } from "./styles";

const mockOptions = [
  { label: "one", value: 1 },
  { label: "two", value: 2 },
  { label: "three", value: 3 }
];

export default function Dropdown({
  options = mockOptions,
  label = "Dropdown"
}) {
  const [open, setOpen] = useState(false);

  const handleOpen = useCallback(() => {
    setOpen(!open);
  }, [open]);

  return (
    <Box>
      <Container>
        <DropdownButton open={open} onClick={handleOpen}>
          {label}
          <FaCaretDown />
        </DropdownButton>
        <DropdownContent open={open}>
          <ul>
            {options?.map((item, index) => (
              <li key={index} value={item.value}>
                {item.label}
              </li>
            ))}
          </ul>
        </DropdownContent>
      </Container>
    </Box>
  );
}
