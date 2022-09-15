import React, { useContext } from "react";
import Grid from "@mui/material/Grid";
import LanguageContext from "../../../../store/languageContext";
import IThemeContext from "../../../../store/themeContext";
import { StyledDiv, StyledH1 } from "./styled";
import IinfoContext from "../../../../store/inputInfoContext";
import { calculatedValues } from "../../../../customHook/calculateSchedule";
import $ from "jquery";
import Portal from "./portal";

const gridCss = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "center",
};

const Result = React.forwardRef<HTMLElement>((props, ref) => {
  const { text, language } = useContext(LanguageContext);
  const { Itheme } = useContext(IThemeContext);
  const [open, setOpen] = React.useState(false);
  const { info } = useContext(IinfoContext);
  const IcalculatedValues = calculatedValues();

  const handleClick = (param: string): void => {
    if (param === "complete") {
      $("#reset-btn").trigger("click");
    }
    if (param === "show") {
      setOpen(true);
    }
  };

  return (
    <>
      <StyledH1 className="h1" ref={ref} language={language} Itheme={Itheme} />
      <StyledDiv className="div" Itheme={Itheme}>
        <Grid container item spacing={2}>
          <Grid sx={gridCss} container item xs={12} md={6}>
            <h4>
              Kullanıcı Girdisi <hr />
            </h4>

            <div>
              <p className="frs-txt">
                {text.home.principal} <span>:</span>
              </p>
              <p className="sc-txt">
                {typeof info.principal === "string"
                  ? (+info.principal).toLocaleString()
                  : null}{" "}
                TL
              </p>
            </div>
            <div>
              <p className="frs-txt">
                {text.home.profitRate}
                <span>:</span>
              </p>
              <p className="sc-txt">%{info.profitRate}</p>
            </div>
            <div>
              <p className="frs-txt">
                {text.home.taxRateBSMV}
                <span>:</span>
              </p>
              <p className="sc-txt">%{info.taxRateBSMV}</p>
            </div>
            <div>
              <p className="frs-txt">
                {text.home.taxRateKKDF}
                <span>:</span>
              </p>
              <p className="sc-txt">%{info.taxRateKKDF}</p>
            </div>
            <div>
              <p className="frs-txt">
                {text.home.numOfIns} <span>:</span>
              </p>
              <p className="sc-txt">{info.numberOfIns}</p>
            </div>
            <div>
              <p className="frs-txt">
                {text.home.insInterval}
                <span>:</span>
              </p>
              <p className="sc-txt">{info.insInterval}</p>
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
              <p className="sc-txt">
                {IcalculatedValues === null
                  ? null
                  : IcalculatedValues[0].toLocaleString()}{" "}
                TL
              </p>
            </div>
            <div>
              <p className="frs-txt">
                {text.home.montlyIns}
                <span>:</span>
              </p>
              <p className="sc-txt">
                {IcalculatedValues === null
                  ? null
                  : IcalculatedValues[1].toLocaleString()}{" "}
                TL
              </p>
            </div>
            <div>
              <p className="frs-txt">
                {text.home.totalTax}
                <span>:</span>
              </p>
              <p className="sc-txt">
                {IcalculatedValues === null
                  ? null
                  : IcalculatedValues[2].toLocaleString()}{" "}
                TL
              </p>
            </div>
          </Grid>
        </Grid>
        <div className="btn-container">
          <button type="reset" onClick={() => handleClick("complete")}>
            {text.home.resultScreen.completeBtn}
          </button>
          <button onClick={() => handleClick("show")}>
            {text.home.resultScreen.showButton}
          </button>
        </div>
      </StyledDiv>
      <Portal open={open} setOpen={setOpen} />
    </>
  );
});

export default Result;
