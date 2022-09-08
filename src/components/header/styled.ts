import styled from "styled-components";

interface IItheme {
  Itheme: string;
}

export const StyledDiv = styled.div<IItheme>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: ${(props) => props.theme.gutters.xlargest};
  h1 {
    font-size: ${(props) => props.theme.fontSizes.biggest};
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: ${(props) => props.theme.gutters.small};
    color: ${(props) =>
      props.Itheme === "light"
        ? props.theme.colors.black
        : props.theme.colors.white};
  }

  p {
    margin-top: 0;
    text-align: center;
    font-weight: ${(props) => props.theme.fontWeights.semiBold};
    color: ${(props) => props.theme.colors.green};
  }

  .button-container {
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    background-color: #5d6b89;
    padding: 20px;
    top: 0;
    z-index: 999;

    .theme {
      margin-right: ${(props) => props.theme.gutters.large};
    }

    .light-btn,
    .tr-btn {
      border-top-left-radius: ${(props) => props.theme.radius.regular};
      border-bottom-left-radius: ${(props) => props.theme.radius.regular};
    }

    .dark-btn,
    .eng-btn {
      border-top-right-radius: ${(props) => props.theme.radius.regular};
      border-bottom-right-radius: ${(props) => props.theme.radius.regular};
    }

    button {
      display: inline-flex;
      justify-content: center;
      width: 50px;
      border-style: solid;
      padding: 5px 20px;
      cursor: pointer;
      font-weight: ${(props) => props.theme.fontWeights.medium};
      :hover {
        background-color: ${(props) => props.theme.colors.green};
        border-color: ${(props) => props.theme.colors.white};
      }

      /*if you wanna change to buttons and butons container's css for theming you will able to do */
      background-color: ${(props) =>
        props.Itheme === "light"
          ? props.theme.colors.backgroundColorDark
          : props.theme.colors.backgroundColorDark};
      color: ${(props) =>
        props.Itheme === "light"
          ? props.theme.colors.white
          : props.theme.colors.white};
      border-color: ${(props) =>
        props.Itheme === "light"
          ? props.theme.colors.buttonBorderColorLight
          : props.theme.colors.buttonBorderColorDark};
    }
    .active {
      scale: 1.2;
      background-color: ${(props) => props.theme.colors.green};
      border: 2px solid ${(props) => props.theme.colors.white};
    }
  }
`;
