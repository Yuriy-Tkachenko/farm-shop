import styled from "styled-components";
import { Img, P } from "../../styled/styled";

export const Feature = styled.article`
  width: 540px;
  min-height: 197px;
  padding: 20px;
  box-sizing: border-box;
  background-color: ${(props) => (props.isNegative ? props.theme.lightPinkCardColor : props.theme.lightGreenCardColor)}
`;

export const Image = styled(Img)`
  width: 56px;
  height: 56px;
  margin-right: ${(props) => props.theme.indent};
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  display: flex;
  margin-bottom: ${(props) => props.theme.indent};
  text-align: left;
`;

export const Owner = styled.span`
  display: inline-block;
  min-height: 25px;
  margin-bottom: 4px;
  margin-left: ${(props) => props.indent};
  padding-left: 10px;
  padding-right: 10px;
  font-size: 14px;
  line-height: 25px;
  color: ${(props) => props.theme.whiteColor};
  background-color: ${(props) =>
    props.isNegative
      ? props.theme.redPanelColor
      : props.theme.greenPanelColor};
`;

export const Text = styled(P)`
  text-align: left;
`;