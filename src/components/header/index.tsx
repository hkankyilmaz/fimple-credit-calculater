import React, { useContext } from "react";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import "animate.css";
import { StyledDiv } from "./styled";
import LanguageContext from "../../store/languageContext";
import IThemeContext from "../../store/themeContext";

function Header() {
  const { text } = useContext(LanguageContext);
  const { Itheme } = useContext(IThemeContext);

  return (
    <StyledDiv Itheme={Itheme}>
      <div className="button-container">
        <div className="theme">
          <button className="light-btn"> {text.header.themeButtonOne} </button>
          <button className="dark-btn"> {text.header.themeButtonTwo} </button>
        </div>
        <div className="lang">
          <button className="tr-btn"> {text.header.langButtonOne} </button>
          <button className="eng-btn"> {text.header.langButtonTwo} </button>
        </div>
      </div>
      <h1 className="animate__animated animate__fadeInUp">
        <CreditScoreIcon
          style={{ marginRight: "20px", fontSize: "50px", color: "#09D3AC" }}
        />
        {text.header.title}
      </h1>
      <p className="animate__animated animate__fadeInUp  animate__delay-1s">
        {text.header.description}
      </p>
    </StyledDiv>
  );
}

export default Header;
