import React from "react";
import Logo from "../../ui/logo/logo";
import { PageFooter } from "./styles"; 

function Footer() {
  return (
    <PageFooter>
      <Logo />
      <p>Создано 2021</p>
    </PageFooter>
  )
}

export default Footer;