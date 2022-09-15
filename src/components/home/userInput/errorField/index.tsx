import React from "react";
import Grid from "@mui/material/Grid";
import { StyledPError } from "./styled";
import ErrorIcon from "@mui/icons-material/Error";
import { IProps } from "./errorField";

const ErrorField: React.FC<IProps> = ({ message }) => {
  return (
    <>
      <Grid item xs={12} md={4}></Grid>
      <Grid item xs={12} md={8}>
        {message && (
          <StyledPError>
            <ErrorIcon sx={{marginRight: "5px",  color: "#ff9999",  fontSize: "17px", }}/>
            {message}
          </StyledPError>
        )}
      </Grid>
    </>
  );
};

export default ErrorField;
