import React, { useContext } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import LanguageContext from "../../store/languageContext";
import { StyledDiv } from "./styled";
import IThemeContext from "../../store/themeContext";
import UserInput from "./userInput";

function Home() {
  const { text } = useContext(LanguageContext);
  const { Itheme } = useContext(IThemeContext);
  return (
    <Container maxWidth="md">
      <StyledDiv Itheme={Itheme}>
        <Grid container spacing={2}>
          <Grid
            container
            item
            xs={12}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <button> {text.home.startButton} </button>
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <UserInput />
        </Grid>
      </StyledDiv>
    </Container>
  );
}

export default Home;
