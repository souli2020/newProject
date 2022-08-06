import React from "react";
import { StyledButton } from "./styles/Button.styled";
function Button({ children }) {
  return <StyledButton>{children}</StyledButton>;
}

export default Button;
