import React from "react";
import Title, { TitleSize } from "../title/title";
import { Feature, Image, TextWrapper, Header, Owner, Text } from "./styles";

function FeatureCard({ title, owner, image, isNegative, about }) {
  return (
    <Feature isNegative={isNegative}>
      <Header>
        <Image width={56} height={56} src={image} alt={title} />
        <TextWrapper>
          <Owner isNegative={isNegative}>{owner}</Owner>
          <Title as="h3" size={TitleSize.LITTLE}>{title}</Title>
        </TextWrapper>
      </Header>
      <Text dangerouslySetInnerHTML={{ __html: about }} />
    </Feature>
  );
};

export default FeatureCard;