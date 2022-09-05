import styled from "styled-components";

interface IItheme {
  Itheme: string;
}

export const StyledForm = styled.div<IItheme>`
  padding: ${(props) => props.theme.gutters.big};
  margin-bottom: ${(props) => props.theme.gutters.big};
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  margin-top: ${(props) => props.theme.gutters.largest};
`;
