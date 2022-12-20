import styled from "styled-components";

const Section = styled.section`
  display: flex;
  padding-top: 100px;
  padding-right: ${(props) => props.theme.pagePadding};
  padding-bottom: 100px;
  padding-right: ${(props => props.theme.pagePadding)};
  position: relative;
  box-sizing: border-box;
`;

export default Section;