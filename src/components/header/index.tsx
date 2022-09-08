import React, { useContext } from "react";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import "animate.css";
import { StyledDiv } from "./styled";
import LanguageContext from "../../store/languageContext";
import IThemeContext from "../../store/themeContext";
import Container from "@mui/material/Container";
import { handleTheme } from "../../customHook/changeTheme";
import { handleLanguage } from "../../customHook/changeLanguage";

function Header() {
  const { text } = useContext(LanguageContext);
  const { language, setLanguage } = useContext(LanguageContext);
  const { Itheme, setITheme } = useContext(IThemeContext);

  const handleClickTheme = (className: string) => {
    handleTheme(className, Itheme, setITheme);
  };

  const handleClickLanguage = (className: string) => {
    handleLanguage(className, language, setLanguage);
  };

  return (
    <Container maxWidth="md">
      <StyledDiv Itheme={Itheme}>
        <div className="button-container">
          <h2>
            <a href="/">CreditCal</a>
          </h2>
          <div className="btn-s">
            <div className="theme">
              <button
                onClick={() => handleClickTheme("light-btn")}
                className="light-btn active"
              >
                {text.header.themeButtonOne}
              </button>
              <button
                onClick={() => handleClickTheme("dark-btn")}
                className="dark-btn"
              >
                {text.header.themeButtonTwo}
              </button>
            </div>
            <div className="lang">
              <button
                onClick={() => handleClickLanguage("tr-btn")}
                className="tr-btn active"
              >
                {text.header.langButtonOne}
              </button>
              <button
                onClick={() => handleClickLanguage("eng-btn")}
                className="eng-btn"
              >
                {text.header.langButtonTwo}
              </button>
            </div>
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
    </Container>
  );
}

export default Header;
