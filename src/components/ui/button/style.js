import styled from "styled-components";

export const StyledButton = styled.a`
  display: block;
  font-size: ${(props => props.theme.fontSizeDefault)};
  font-weight: 700;
  line-height: 150%;
  color: ${(props) => props.theme.whiteColor};
  min-height: 60px;
  min-width: ${(props) => `${props.$minWidth}px` || "100%"};
  max-width: 700px;
  background-color: ${(props) => props.theme.orangeButtonColor};
  text-align: center;
  text-decoration: none;
  border: none;
  cursor: pointer;

  &:hover,
  &:active {
    background-color: ${(props) => props.theme.orangeButtonHoverColor};
    box-shadow: inset 0px 4px 0px rgba(0, 0, 0, 0.14);
  }

  &:active {
    box-shadow: none;
  }
`