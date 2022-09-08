import styled from "styled-components";
interface IItheme {
  Itheme?: string;
  className?: string;
}

export const StyledDiv = styled.div<IItheme>`
  width: 100%;
  padding: 20px 35px;
  margin-top: ${(props) => props.theme.gutters.largest};
  margin-bottom: ${(props) => props.theme.gutters.largest};
  background-color: ${(props) =>
    props.Itheme === "light"
      ? props.theme.colors.darkWhite
      : props.theme.colors.softBlue};
  box-shadow: ${(props) =>
    props.Itheme === "light"
      ? props.theme.boxShadow.light
      : props.theme.boxShadow.dark};
  border-radius: ${(props) => props.theme.radius.small};
  div {
    width: 100%;
    display: flex;
  }
  h4 {
    width: 100%;
    font-weight: ${(props) => props.theme.fontWeights.medium};
    color: ${(props) =>
      props.Itheme === "light"
        ? props.theme.colors.green
        : props.theme.colors.green};
    font-weight: bold;
    hr {
    }
  }
  .frs-txt {
    width: 50%;
    font-weight: ${(props) => props.theme.fontWeights.medium};
    color: ${(props) =>
      props.Itheme === "light"
        ? props.theme.colors.darkestWhite
        : props.theme.colors.white};
    font-weight: bold;
  }
  .sc-txt {
    height: 2em;
    width: 50%;
    background-color: ${(props) => props.theme.colors.white};
    border-radius: ${(props) => props.theme.radius.small};
  }
  span {
    float: right;
    position: relative;
    right: 15%;
  }
  .btn-container {
    display: flex;
    justify-content: center;
    align-items: center;
    button {
      width: 200px;
      padding: 8px 16px;
      margin-right: ${(props) => props.theme.gutters.smallBig};
      margin-top: ${(props) => props.theme.gutters.regular};
      cursor: pointer;
      border-radius: ${(props) => props.theme.radius.small};
      border: none;
      background-color: ${(props) =>
        props.Itheme === "light"
          ? props.theme.colors.softBlue
          : props.theme.colors.green};
      color: ${(props) =>
        props.Itheme === "light"
          ? props.theme.colors.white
          : props.theme.colors.white};
      :hover {
        background-color: ${(props) =>
          props.Itheme === "light"
            ? props.theme.colors.green
            : props.theme.colors.darkGreen};
      }
    }
  }
`;

export const StyledH1 = styled.h1<IItheme>`
  font-size: ${(props) => props.theme.fontSizes.biggest};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: ${(props) => props.theme.gutters.small};
  color: ${(props) =>
    props.Itheme === "light"
      ? props.theme.colors.black
      : props.theme.colors.white};
`;
