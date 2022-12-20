import styled from "styled-components";

export const FeatureSection = styled.div`
  padding: 100px 90px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 55px -10px;
`;

export const Item = styled.li`
  list-style: none;
  background-color: ${(props) => props.theme.lightGreenCardColor};
  margin: 10px;
`;