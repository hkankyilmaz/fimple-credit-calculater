import React, { useContext } from "react";
import { StyledDiv, StyledP } from "./styled";
import LanguageContext from "../../store/languageContext";
import IThemeContext from "../../store/themeContext";

function Footer() {
  const { text } = useContext(LanguageContext);
  const { Itheme } = useContext(IThemeContext);
  return (
    <StyledDiv Itheme={Itheme}>
      <StyledP>
        {text.footer.footerText} <span>®</span>
      </StyledP>
    </StyledDiv>
  );
}

export default Footer;
