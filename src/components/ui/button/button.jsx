import React from "react";
import { StyledButton } from "./style";

function Button({ children, minWidth, link, className }) {
  return (
    <StyledButton 
      $minWidth={minWidth}
      {...(link ? { href: link } : { as: "button", type: "button" })}
      className={className}
    >
      {children}
    </StyledButton>
  )
};

export default Button;