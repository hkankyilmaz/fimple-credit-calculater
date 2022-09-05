import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html{ 
   overflow-x: hidden;
  }
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
    overflow-x: hidden;
    background-color: #fafafa;
  }
  
`;

export const theme = {
  colors: {
    white: "#fff",
    black: "#000",
    gray: "#C4C4C4",
    green: "#09D3AC",
    blue: "#48556a",
    lightGray: "#E5E5E5",
    textColorLight: "#000",
    textColorDark: "#fff",
    inputBorderColor: "#E0E0E0",
    placeHolderColor: "#A8A8A8",
    backgroundColorLight: "#F2F2F2",
    backgroundColorDark: "#303846",
    buttonBorderColorLight: "#09D3AC",
    buttonBorderColorDark: "#09D3AC",
    radioTextColor: "#525252",
  },
  fontSizes: {
    smaller: "12px",
    small: "13px",
    regular: "14px",
    regularBig: "18px",
    bigger: "20px",
    biggest: "45px",
  },
  fontWeights: {
    thin: "100",
    extralight: "200",
    light: "300",
    normal: "400",
    medium: "500",
    semiBold: "600",
    bold: "700",
    extraBold: "800",
    heavy: "900",
  },
  gutters: {
    smaller: "5px",
    small: "10px",
    smallBig: "16px",
    regular: "20px",
    regularBig: "25px",
    big: "30px",
    large: "40px",
    largest: "50px",
    xlargest: "70px",
  },
  radius: {
    regular: "12px",
    small: "5px",
  },
  fontFamily: {
    main: '"Open Sans", sans-serif;',
  },
};

export const Container = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 576px) {
    max-width: 576px;
  }
  @media (min-width: 768px) {
    max-width: 768px;
  }
  @media (min-width: 992px) {
    max-width: 992px;
  }
  @media (min-width: 1200px) {
    max-width: 1150px;
  }
  @media (min-width: 1400px) {
    max-width: 1400px;
  }
`;

export const SpinnerWrapper = styled.div`
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 100vw;
  min-height: 100vh;
  z-index: 1000;
`;
