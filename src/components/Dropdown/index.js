import React, { useState, useCallback } from "react";
import { FaCaretDown } from "react-icons/fa";

import { Container, DropdownContent, DropdownButton } from "./styles";

export default function Dropdown({ options, label }) {
  const [open, setOpen] = useState(false);

  const handleOpen = useCallback(() => {
    setOpen(!open);
  }, [open]);

  return (
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
  );
}
