import React, { useContext } from "react";
import Grid from "@mui/material/Grid";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import LanguageContext from "../../../../store/languageContext";
import IThemeContext from "../../../../store/themeContext";
import { StyledDiv, StyledH1 } from "./styled";

const gridCss = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "center",
};

const Result = () => {
  const { text, language } = useContext(LanguageContext);
  const { Itheme } = useContext(IThemeContext);
  console.log(Itheme);
  return (
    <div className="result-container" style={{ display: "none" }}>
      <StyledH1 className="animate__animated animate__fadeInUp">
        <CreditScoreIcon
          style={{ marginRight: "20px", fontSize: "50px", color: "#09D3AC" }}
        />
        {text.home.resultScreen.completedText}
      </StyledH1>
      <StyledDiv Itheme={Itheme}>
        <Grid container item spacing={2}>
          <Grid sx={gridCss} container item xs={12} md={6}>
            <h4>
              Kullanıcı Girdisi <hr />
            </h4>
            <div>
              <p className="frs-txt">
                {" "}
                {text.home.principal} <span>:</span>
              </p>
              <p className="sc-txt"></p>
            </div>
            <div>
              <p className="frs-txt">
                {" "}
                {text.home.profitRate}
                <span>:</span>{" "}
              </p>
              <p className="sc-txt"></p>
            </div>
            <div>
              <p className="frs-txt">
                {" "}
                {text.home.taxRateBSMV}
                <span>:</span>{" "}
              </p>
              <p className="sc-txt"></p>
            </div>
            <div>
              <p className="frs-txt">
                {" "}
                {text.home.taxRateKKDF}
                <span>:</span>{" "}
              </p>
              <p className="sc-txt"></p>
            </div>
            <div>
              <p className="frs-txt">
                {" "}
                {text.home.numOfIns} <span>:</span>
              </p>
              <p className="sc-txt"></p>
            </div>
            <div>
              <p className="frs-txt">
                {" "}
                {text.home.insInterval}
                <span>:</span>{" "}
              </p>
              <p className="sc-txt"></p>
            </div>
          </Grid>
          <Grid sx={gridCss} container item xs={12} md={6}>
            <h4>
              Hesaplanan Değerler <hr />
            </h4>
            <div>
              <p className="frs-txt">
                {text.home.totalRefund}
                <span>:</span>
              </p>
              <p className="sc-txt"></p>
            </div>
            <div>
              <p className="frs-txt">
                {text.home.montlyIns}
                <span>:</span>
              </p>
              <p className="sc-txt"></p>
            </div>
            <div>
              <p className="frs-txt">
                {text.home.totalTax}
                <span>:</span>
              </p>
              <p className="sc-txt"></p>
            </div>
          </Grid>
        </Grid>
        <div className="btn-container">
          <button> {text.home.resultScreen.completeBtn} </button>
          <button> {text.home.resultScreen.showButton} </button>
        </div>
      </StyledDiv>
    </div>
  );
};

export default Result;
