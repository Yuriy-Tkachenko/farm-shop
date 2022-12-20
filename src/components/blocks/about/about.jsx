import React from "react";
import Title, { TitleSize } from "../../ui/title/title";
import { StyledSection, Text, TextWrapper } from "./styles";

function About() {
  return(
    <StyledSection>
      <TextWrapper>
        <Title size={TitleSize.BIG} TitleLevel={1}>Магазин фермерских продуктов с доставкой</Title>
        <Text>
          Все продукты изготавливаются под заказ. Фермеры начинают готовить продукты за день до отправки заказа клиентам. Именно поэтому мы принимаем заказы заранее и доставляем продукты максимально свежими.
        </Text>
      </TextWrapper>
    </StyledSection>
  )
}

export default About;