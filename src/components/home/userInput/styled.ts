import styled from "styled-components";

interface IItheme {
  Itheme: string;
}

export const StyledForm = styled.form<IItheme>`
  background-color: #f2f2f2;
  border-radius: ${(props) => props.theme.radius.small};
  padding: ${(props) => props.theme.gutters.big};
  margin-bottom: ${(props) => props.theme.gutters.big};
  box-shadow: ${(props) =>
    props.Itheme === "light"
      ? props.theme.boxShadow.light
      : props.theme.boxShadow.dark};
  margin-top: ${(props) => props.theme.gutters.largest};

  p {
    font-weight: ${(props) => props.theme.fontWeights.medium};
    color: #737373;
    font-weight: bold;
  }

  span {
    float: right;
    margin-right: 50%;
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
    border: 0 !important;
    background: ${(props) => props.theme.colors.white};
    background-image: none;
    flex: 1;
    padding: 0 0.5em;
    color: #8c8c8c;
    cursor: pointer;

    font-family: "Open Sans", sans-serif;
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
    left: 50%;
    transform: translateX(-48%);
  }
`;
