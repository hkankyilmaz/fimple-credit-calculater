import styled from "styled-components";

interface IProps {
  Itheme: string;
}

export const StyledDiv = styled.div<IProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 5vh;
  background-color: ${(props) =>
    props.Itheme === "light" ? "#5d6b89" : "#3E475B"};
  margin-top: ${(props) => props.theme.gutters.xlargest};
  transition: background-color 1s ease;
`;

export const StyledP = styled.p`
  color: ${(props) => props.theme.colors.gray};
  font-weight: ${(props) => props.theme.fontWeights.thin};
  font-size: ${(props) => props.theme.fontSizes.regular};
  span {
    color: ${(props) => props.theme.colors.green};
  }
`;
