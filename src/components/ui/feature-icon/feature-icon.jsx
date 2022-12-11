import React from "react";

export const FoodFeature = {
  FARM: "Фермерские продукты",
  MARKET: "Магазинные продукты",
}

function FeatureIcon({ className="", feature }) {
  let options;

  switch (feature) {
    case FoodFeature.FARM:
      options = {
        text: "Фермерские продукты",
        bgColor: "#88AA4D",
        cardColor: "#E1EDCE",
      };
      break;
    case FoodFeature.MARKET:
      options = {
        text: "Магазинные продукты",
        bgColor: "#F75531",
        cardColor: "#F8DDD7",
      };
      break;
    default:
      options = {
        text: "",
        bgColor: "#000000",
        cardColor: "#333333",
      }
      break;
  }

  return options.text ? (
    <span
      className={`feature-icon ${className}`}
      style={{ backgroundColor: options.bgColor }}
    >
      {options.text}
    </span>
  ) : null;
}

export default FeatureIcon;