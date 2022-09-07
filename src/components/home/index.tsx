import React, { useContext, useRef } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import LanguageContext from "../../store/languageContext";
import { StyledDiv } from "./styled";
import IThemeContext from "../../store/themeContext";
import UserInput from "./userInput";

function Home() {
  const { text } = useContext(LanguageContext);
  const { Itheme } = useContext(IThemeContext);
  const inputRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    const input = inputRef.current?.lastChild as HTMLElement;
    input !== null && input.focus();
  };

  return (
    <Container maxWidth="md">
      <StyledDiv Itheme={Itheme}>
        <Grid container spacing={2}>
          <Grid
            container
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <button onClick={handleClick}> {text.home.startButton} </button>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={1}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <UserInput ref={inputRef} />
        </Grid>
      </StyledDiv>
    </Container>
  );
}

export default Home;
