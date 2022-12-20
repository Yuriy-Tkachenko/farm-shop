import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import MainPage from "../../pages/main-page/main-page";
import { MainWrapper } from "./styles";

function PageWrapper({ ...prop }) {
  return (
    <>
      <Header />
      <MainWrapper>
        <MainPage {...prop} />
      </MainWrapper>
      <Footer />
    </>
  );
}

export default PageWrapper;