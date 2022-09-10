import React from "react";
import styled from "styled-components";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
interface IItheme {
  Itheme?: string;
  className?: string;
  language?: string;
}

export const StyledDiv = styled.div<IItheme>`
  display: none;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding: 20px 35px;
  margin-top: ${(props) => props.theme.gutters.big};
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
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 2em;
    width: 50%;
    padding: 0.5em 0.5em;
    flex: 1;
    color: #8c8c8c;
    font-size: ${(props) => props.theme.fontSizes.small};
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

const hOne: any = React.forwardRef(
  (props: IItheme, ref?: React.Ref<HTMLDivElement>) => (
    <h1 className={props.className} ref={ref}>
      <CreditScoreIcon
        style={{
          marginRight: "20px",
          fontSize: "50px",
          color: "#09D3AC",
        }}
      />
      {props.language === "turkihs"
        ? "Hesaplamanız Tamamlandı"
        : "Your Calculate is Completed"}
    </h1>
  )
);

export const StyledH1 = styled(hOne)<IItheme>`
  font-size: ${(props) => props.theme.fontSizes.biggest};
  display: none;
  justify-content: center;
  align-items: center;
  margin-bottom: ${(props) => props.theme.gutters.small};
  color: ${(props) =>
    props.Itheme === "light"
      ? props.theme.colors.black
      : props.theme.colors.white};
`;
