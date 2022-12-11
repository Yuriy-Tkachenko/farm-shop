import React from "react";
import Title, { TitleSize } from "../../ui/title/title";
import FeatureCard from "../../ui/feature-card/feature-card";
import Button from "../../ui/button/button";
import "../feature-list/style.css";

function FeatureList({ features }) {
  return (
    <section className="feature-list">
      {features?.length ? (
        <>
          <Title size={TitleSize.SMALL}>Почему фермерские продукты лучше?</Title>
          <ul className="feature-list__list">
            {features.map((feature) => (
              <li className="feature-list__item" key={feature.id}>
                <FeatureCard {...feature} />
              </li>
            ))}
          </ul>
          <Button>Купить</Button>
        </>
      ) : null}
    </section>
  );
}

export default FeatureList;