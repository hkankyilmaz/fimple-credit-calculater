import styled from "styled-components";

interface IItheme {
  Itheme: string;
  language: string;
}

export const StyledForm = styled.form<IItheme>`
  background-color: ${(props) =>
    props.Itheme === "light"
      ? props.theme.colors.darkWhite
      : props.theme.colors.softBlue};
  border-radius: ${(props) => props.theme.radius.small};
  padding: ${(props) => props.theme.gutters.big};
  margin-bottom: ${(props) => props.theme.gutters.big};
  box-shadow: ${(props) =>
    props.Itheme === "light"
      ? props.theme.boxShadow.light
      : props.theme.boxShadow.dark};
  margin-top: ${(props) => props.theme.gutters.largest};
  transition: background-color 0.3s ease;

  p {
    font-weight: ${(props) => props.theme.fontWeights.medium};
    color: ${(props) =>
      props.Itheme === "light"
        ? props.theme.colors.darkestWhite
        : props.theme.colors.white};
    font-weight: bold;
  }

  span {
    float: right;
    margin-right: ${(props) => (props.language === "turkish" ? "35%" : "25%")};
    font-weight: bold;
  }

  select,
  input {
    -webkit-appearance: none;
    -moz-appearance: none;
    -ms-appearance: none;
    appearance: none;
    outline: 0;
    box-shadow: none;
    border: 0;
    background: ${(props) => props.theme.colors.white};
    background-image: none;
    flex: 1;
    padding: 0 0.5em;
    color: #8c8c8c;
    cursor: pointer;
    font-family: "Open Sans", sans-serif;
  }
  select:focus,
  input:focus {
    border: 2px solid ${(props) => props.theme.colors.green};
  }
  input {
    cursor: default;
  }

  select::-ms-expand {
    display: none;
  }
  .select,
  .input {
    position: relative;
    display: flex;
    width: 100%;
    height: 3em;
    line-height: 3;
    background: white;
    overflow: hidden;
    border-radius: 0.25em;
  }
  .select::after,
  .input::after {
    content: "ᐁ";
    color: white;
    position: absolute;
    top: 0;
    right: 0;
    padding: 0 1em;
    background: ${(props) => props.theme.colors.green};
    cursor: pointer;
    pointer-events: none;
  }

  .input::after {
    color: transparent;
  }

  button {
    margin-top: ${(props) => props.theme.gutters.big};
    position: relative;
    margin-right: ${(props) => props.theme.gutters.smallBig};
  }

  @media (max-width: 900px) {
    span {
      position: absolute;
      float: none;
      padding-left: 10px;
      margin-right: ${(props) => (props.language === "turkish" ? "0" : "0")};
      font-weight: bold;
    }
  }
`;
