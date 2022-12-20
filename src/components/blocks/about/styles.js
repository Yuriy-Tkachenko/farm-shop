import styled from "styled-components";
import { Section } from '../../styled/styled';
import aboutImageBackground from "../../../assets/ellipse.svg";
import aboutImage from "../../../assets/front-human.svg";

const Paragraph = styled.p`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

export const StyledSection = styled(Section)`
  position: relative;
  padding-left: ${(props) => props.theme.pagePadding};
  padding-top: 183px;
  padding-bottom: 183px;
  padding-right: 553px;
  background-color: ${(props) => props.theme.lightBlueBackgroundColor};
  z-index: 1;

  &::after {
    content: "";
    position: absolute;
    width: 446px;
    height: 446px;
    background: url(${aboutImageBackground});
    background-repeat: no-repeat;
    right: 90px;
    top: 126px;
    z-index: 0;
  }

  &::before {
    content: "";
    position: absolute;
    width: 273px;
    height: 563px;
    background-image: url(${aboutImage});
    background-repeat: no-repeat;
    right: 177px;
    bottom: 0;
    z-index: 5;
  }
`;

export const TextWrapper = styled.div`
  position: relative;
  max-width: 538px;
`;

export const Text = styled(Paragraph)`
  margin-top: ${(props) => props.theme.indent};
  margin-bottom: 40px;
`;

