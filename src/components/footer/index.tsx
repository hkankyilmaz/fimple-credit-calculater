import React, { useContext } from "react";
import { StyledDiv, StyledP } from "./styled";
import LanguageContext from "../../store/languageContext";

function Footer() {
  const { text } = useContext(LanguageContext);
  return (
    <StyledDiv>
      <StyledP>
        {text.footer.footerText} <span>®</span>
      </StyledP>
    </StyledDiv>
  );
}

export default Footer;
