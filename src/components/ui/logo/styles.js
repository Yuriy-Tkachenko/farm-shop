import styled from "styled-components";

export const StyledLogo = styled.a`
  text-decoration: none;
  display: flex;
  align-items: center;
`;

export const Text = styled.span`
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 115%;
  color: ${(props) => props.theme.blackColor};
  margin-left: 24px;
`;