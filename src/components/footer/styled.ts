import styled from "styled-components";

export const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 5vh;
  background-color: #5d6b89;
  margin-top: ${(props) => props.theme.gutters.largestBig};
`;

export const StyledP = styled.p`
  color: ${(props) => props.theme.colors.gray};
  font-weight: ${(props) => props.theme.fontWeights.thin};
  font-size: ${(props) => props.theme.fontSizes.regular};
  span {
    color: ${(props) => props.theme.colors.green};
  }
`;
