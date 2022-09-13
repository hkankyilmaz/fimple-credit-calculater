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
    background-color: #f2f2f2;
    transition:background-color 0.3s ease ;
    position: relative;
    
 }

  
`;

export const theme = {
  colors: {
    white: "#fff",
    darkWhite: "#f2f2f2",
    darkestWhite: "#737373",
    black: "#000",
    gray: "#C4C4C4",
    green: "#09D3AC",
    darkGreen: "#069377",
    softBlue: "#5d6b89",
    blue: "#a4b0c1",
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
    largestBig: "63px",
    xlargest: "70px",
  },
  radius: {
    regular: "12px",
    small: "5px",
  },
  fontFamily: {
    main: '"Open Sans", sans-serif;',
  },
  boxShadow: {
    light: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
    lightDark: " rgb(38, 57, 77) 0px 15px 10px -15px;",
    dark: "rgba(242, 242, 250, 0.2) 0px 7px 29px 0px",
  },
};
