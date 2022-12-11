import React from "react";
import PageWrapper from "../layout/page-wrapper/page-wrapper";
import "./style.css";
import featureList from "../../mocks/feature-list";

export default function App() {
  return <PageWrapper features={ featureList } />
}