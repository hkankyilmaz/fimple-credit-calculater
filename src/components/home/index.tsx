import React, { useContext, useRef } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import LanguageContext from "../../store/languageContext";
import { StyledDiv } from "./styled";
import IThemeContext from "../../store/themeContext";
import UserInput from "./userInput";
import { handleScroll } from "../../customHook/handleScroll";

function Home() {
  const { text } = useContext(LanguageContext);
  const { Itheme } = useContext(IThemeContext);
  const inputRef = useRef<any>(null);
  const inputForm = useRef<HTMLDivElement>(null);

  const gridCss = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const handleClick = () => {
    inputRef.current.focusInput();

    handleScroll(inputForm);
  };

  return (
    <Container ref={inputForm} maxWidth="md">
      <StyledDiv Itheme={Itheme}>
        <Grid container spacing={2}>
          <Grid container sx={gridCss}>
            <button onClick={handleClick}> {text.home.startButton} </button>
          </Grid>
        </Grid>
        <Grid container spacing={1} style={gridCss}>
          <UserInput ref={inputRef} />
        </Grid>
      </StyledDiv>
    </Container>
  );
}

export default Home;
