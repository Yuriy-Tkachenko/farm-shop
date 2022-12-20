import React from "react";
import PageWrapper from "../layout/page-wrapper/page-wrapper";
import featureList from "../../mocks/feature-list";
import { GlobalStyle } from "./styles";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <PageWrapper features={ featureList } />
    </>
  )
}