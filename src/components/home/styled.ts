import styled from "styled-components";

interface IItheme {
  Itheme: string;
}

export const StyledDiv = styled.div<IItheme>`
  margin-top: ${(props) => props.theme.gutters.big};
  button {
    width: 200px;
    padding: 8px 16px;
    cursor: pointer;
    border-radius: ${(props) => props.theme.radius.small};
    border: ${(props) =>
      props.Itheme === "light"
        ? `none`
        : `1px solid ${props.theme.colors.white}`};
    background-color: ${(props) =>
      props.Itheme === "light"
        ? props.theme.colors.black
        : props.theme.colors.green};
    color: ${(props) =>
      props.Itheme === "light"
        ? props.theme.colors.white
        : props.theme.colors.green};
    :hover {
      background-color: ${(props) =>
        props.Itheme === "light"
          ? props.theme.colors.green
          : props.theme.colors.green};
    }
  }
`;
