import React from "react";
import "../title/style.css";

export const TitleSize = {
  BIG: "big",
  SMALL: "small",
  LITTLE: "little",
  DEFAULT: ""
};

function Title({ children, size }) {
  return <h1 className={`title${size ? ` title_${size}` : ""}`}>{children}</h1>;
}

export default Title;