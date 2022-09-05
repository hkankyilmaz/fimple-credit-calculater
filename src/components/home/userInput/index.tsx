import React, { useContext } from "react";
import LanguageContext from "../../../store/languageContext";
import IThemeContext from "../../../store/themeContext";
import Grid from "@mui/material/Grid";
import { StyledForm } from "./styled";

function UserInput() {
  const { text } = useContext(LanguageContext);
  const { Itheme } = useContext(IThemeContext);
  return (
    <StyledForm Itheme={Itheme}>
      <Grid
        container
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        spacing={2}
      >
        <Grid item xs={12} md={6}>
          <p> {text.home.principal} </p>
        </Grid>
        <Grid item xs={12} md={6}></Grid>
        <Grid item xs={12}></Grid>
        <Grid item xs={12} md={6}>
          <p> {text.home.numOfIns}</p>
        </Grid>
        <Grid item xs={12} md={6}></Grid>
        <Grid item xs={12}></Grid>
        <Grid item xs={12} md={6}>
          <p>{text.home.profitRate}</p>
        </Grid>
        <Grid item xs={12} md={6}></Grid>
        <Grid item xs={12}></Grid>
        <Grid item xs={12} md={6}>
          <p>{text.home.insInterval}</p>
        </Grid>
        <Grid item xs={12} md={6}></Grid>
        <Grid item xs={12}></Grid>
        <Grid item xs={12} md={6}>
          <p>{text.home.taxRate}</p>
        </Grid>
        <Grid item xs={12} md={6}></Grid>
        <Grid item xs={12}></Grid>
      </Grid>
    </StyledForm>
  );
}

export default UserInput;
