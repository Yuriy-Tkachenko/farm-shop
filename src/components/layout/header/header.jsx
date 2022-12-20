import React from "react";
import Logo from "../../ui/logo/logo";
import Nav from "../nav/nav";
import { PageHeader } from "./styles";

function Header() {
  return (
    <PageHeader>
      <Logo />
      <Nav />
    </PageHeader>
  )
}

export default Header;