import React from "react";
import Title from "../../ui/title/title";
import FeatureCard from "../../ui/feature-card/feature-card";
import Button from "../../ui/button/button";
import { FeatureSection, List, Item } from "./styles";

function FeatureList({ features }) {
  return (
    <FeatureSection>
      {features?.length ? (
        <>
          <Title TitleLevel={2}>Почему фермерские продукты лучше?</Title>
          <List>
            {features.map((feature) => (
              <Item key={feature.id}>
                <FeatureCard {...feature} />
              </Item>
            ))}
          </List>
          <Button minWidth={260} link="">Купить</Button>
        </>
      ) : null}
    </FeatureSection>
  );
}

export default FeatureList;