import React from "react";
import Title, { TitleSize } from "../title/title";
import FeatureIcon from "../feature-icon/feature-icon";
import "../feature-card/style.css";

function FeatureCard({ feature, name, image, isNegative, about }) {
  return (
    <article className={`feature-card${isNegative ? " feature_negative" : ""}`}>
      <figure className="feature-card__figure">
        <div className="feature-card__wrapper">
          <img 
            src={image}
            className="feature-card__image"
            width={52}
            height={52}
            alt="изображение преимущества" 
          />
          <div className="feature-card__text-wrapper">
            <FeatureIcon className="feature-card__icon" feature={feature} />
            <Title size={TitleSize.LITTLE}>{name}</Title>
          </div>
        </div>
        <p className="feature-card__text" dangerouslySetInnerHTML={{ __html: about }} />
      </figure>
    </article>
  )
};

export default FeatureCard;