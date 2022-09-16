import React, {
  useContext,
  useEffect,
  useRef,
  useImperativeHandle,
} from "react";
import LanguageContext from "../../../store/languageContext";
import IThemeContext from "../../../store/themeContext";
import ErrorField from "./errorField";
import { focusImput } from "../../../customHook/focusImput";
import IinfoContext from "../../../store/inputInfoContext";
import { handleScroll } from "../../../customHook/handleScroll";
import Cleave from "cleave.js/react";
import AlertMessage from "./alert";
import Grid from "@mui/material/Grid";
import { StyledForm } from "./styled";
import { useForm, Controller } from "react-hook-form";
import { FormInputs } from "./userInput";
import Result from "./Result";
import $ from "jquery";
import "animate.css";
import { info } from "console";

const UserInput = React.forwardRef<any>((props, inputRef) => {
  const [click, setClick] = React.useState(0);
  const { text, language } = useContext(LanguageContext);
  const { Itheme } = useContext(IThemeContext);
  const { setInfo } = useContext(IinfoContext);
  const ref = useRef<HTMLDivElement>(null);
  const resultRef = useRef<HTMLDivElement>(null);
  const alertRef = useRef<any>(null);

  useImperativeHandle(inputRef, () => {
    return {
      focusInput: () => {
        const input = ref.current?.lastChild as HTMLElement;
        input !== null && input.focus();
      },
    };
  });

  const {
    control,
    reset,
    register,
    watch,
    getValues,
    setFocus,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>({ criteriaMode: "all" });

  const watchFields = watch(["numOfIns", "insInterval"]);
  // const watchFieldsAll = watch();
  // console.log(watchFieldsAll);

  const onSubmit = (data: FormInputs) => {
    Object.entries(data).map((item, idx) => {
      const temprr = item[1].replace(/[TL,% ]/g, (m: string) => "");
      idx === 0 && setInfo({ ...info, numberOfIns: temprr });
      idx === 1 && setInfo({ ...info, insInterval: temprr });
      idx === 2 && setInfo({ ...info, principal: temprr });
      idx === 3 && setInfo({ ...info, profitRate: temprr });
      idx === 4 && setInfo({ ...info, taxeRateBSMV: temprr });
      idx === 5 && setInfo({ ...info, taxeRateKKDF: temprr });
    });

    alertRef.current.openAlert();

    resultRef.current !== null &&
      $(resultRef.current).addClass(
        "animate__animated animate__fadeInUp  animate__delay-1s"
      );
    $(".h1,.div").css("display", "flex");
    handleScroll(resultRef);
  };

  const IhandleClick = (): void => {
    reset();
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => {
      $(".h1,.div").css("display", "none");
    }, 1000);
  };

  // useEffect(() => {
  //   focusImput(getValues(), setFocus);
  // }, [watchFields]);

  useEffect(() => {
    Object.keys(errors).length !== 0 && alertRef.current.openAlert();
  }, [click, errors]);

  return (
    <>
      <StyledForm
        language={language}
        Itheme={Itheme}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Grid
          container
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          spacing={2}
        >
          <Grid item xs={12} md={4}>
            <p>
              {text.home.principal} <span>:</span>
            </p>
          </Grid>
          <Grid item xs={12} md={8}>
            <div className="input" ref={ref}>
              <Controller
                name="principal"
                control={control}
                render={({ field }) => (
                  <Cleave
                    {...field}
                    autoComplete="off"
                    placeholder={text.home.principalPlaceHolder}
                    options={{
                      numeral: true,
                      prefix: " TL",
                      tailPrefix: true,
                      noImmediatePrefix: true,
                    }}
                  />
                )}
                rules={{
                  required: text.home.errorField.required,
                  maxLength: {
                    value: 14,
                    message: text.home.errorField.principal.max,
                  },
                  min: {
                    value: 8,
                    message: text.home.errorField.principal.min,
                  },
                }}
              />
            </div>
          </Grid>
          <Grid container item xs={12}>
            <ErrorField message={errors?.principal?.message || null} />
          </Grid>
          <Grid item xs={12} md={4}>
            <p>
              {text.home.profitRate} <span>:</span>
            </p>
          </Grid>
          <Grid item xs={12} md={8}>
            <div className="input">
              <Controller
                name="profitRate"
                control={control}
                render={({ field }) => (
                  <Cleave
                    {...field}
                    autoComplete="off"
                    placeholder={text.home.profitRatePlaceHolder}
                    options={{
                      numeral: true,
                      numeralThousandsGroupStyle: "none",
                      prefix: "% ",
                      noImmediatePrefix: true,
                    }}
                  />
                )}
                rules={{
                  required: text.home.errorField.required,
                  maxLength: {
                    value: 7,
                    message: text.home.errorField.principal.max,
                  },
                }}
              />
            </div>
          </Grid>
          <Grid container item xs={12}>
            <ErrorField message={errors?.profitRate?.message || null} />
          </Grid>
          <Grid item xs={12} md={4}>
            <p>
              {text.home.taxRateBSMV} <span>:</span>
            </p>
          </Grid>
          <Grid item xs={12} md={8}>
            <div className="input">
              <Controller
                name="taxeRateBSMV"
                control={control}
                render={({ field }) => (
                  <Cleave
                    {...field}
                    autoComplete="off"
                    placeholder={text.home.taxRateBSMVPlaceHolder}
                    options={{
                      numeral: true,
                      numeralThousandsGroupStyle: "none",
                      prefix: "% ",
                      noImmediatePrefix: true,
                      rawValueTrimPrefix: true,
                    }}
                  />
                )}
                rules={{
                  required: text.home.errorField.required,
                  maxLength: {
                    value: 7,
                    message: text.home.errorField.principal.max,
                  },
                }}
              />
            </div>
          </Grid>
          <Grid item container xs={12}>
            <ErrorField message={errors?.taxeRateBSMV?.message || null} />
          </Grid>
          <Grid item xs={12} md={4}>
            <p>
              {text.home.taxRateKKDF} <span>:</span>
            </p>
          </Grid>
          <Grid item xs={12} md={8}>
            <div className="input">
              <Controller
                name="taxeRateKKDF"
                control={control}
                render={({ field }) => (
                  <Cleave
                    {...field}
                    autoComplete="off"
                    placeholder={text.home.taxRateKKDFPlaceHolder}
                    options={{
                      numeral: true,
                      numeralThousandsGroupStyle: "none",
                      prefix: "% ",
                      noImmediatePrefix: true,
                      rawValueTrimPrefix: true,
                    }}
                  />
                )}
                rules={{
                  required: text.home.errorField.required,
                  maxLength: {
                    value: 7,
                    message: text.home.errorField.principal.max,
                  },
                }}
              />
            </div>
          </Grid>
          <Grid item container xs={12}>
            <ErrorField message={errors?.taxeRateKKDF?.message || null} />
          </Grid>
          <Grid item xs={12} md={4}>
            <p>
              {text.home.numOfIns} <span>:</span>
            </p>
          </Grid>
          <Grid item xs={12} md={8}>
            <div className="select">
              <select
                {...register("numOfIns", {
                  required: text.home.errorField.required,
                })}
              >
                <option value=""> {text.home.numOfInsPlaceHolder} </option>
                {Array(12)
                  .fill("")
                  .map((item, idx) => (
                    <option key={idx} value={(idx + 1) * 3}>
                      {(idx + 1) * 3}
                    </option>
                  ))}
              </select>
            </div>
          </Grid>
          <Grid container item xs={12}>
            <ErrorField message={errors?.numOfIns?.message || null} />
          </Grid>

          <Grid item xs={12} md={4}>
            <p>
              {text.home.insInterval} <span>:</span>
            </p>
          </Grid>
          <Grid item xs={12} md={8}>
            <div className="select">
              <select
                {...register("insInterval", {
                  required: text.home.errorField.required,
                })}
              >
                <option value=""> {text.home.insIntervalPlaceHolder} </option>
                <option value={text.home.insIntervalOptOne}>
                  {text.home.insIntervalOptOne}
                </option>
                <option value={text.home.insIntervalOptTwo}>
                  {text.home.insIntervalOptTwo}
                </option>
                <option value={text.home.insIntervalOptThree}>
                  {text.home.insIntervalOptThree}
                </option>
              </select>
            </div>
          </Grid>
          <Grid item container xs={12}>
            <ErrorField message={errors?.insInterval?.message || null} />
          </Grid>
        </Grid>
        <Grid sx={{ justifyContent: "center" }} container item xs={12}>
          <button id="reset-btn" onClick={() => IhandleClick()} type="button">
            {text.home.resetteButton}
          </button>
          <button onClick={() => setClick(click + 1)} type="submit">
            {text.home.calculateButton}
          </button>
        </Grid>
      </StyledForm>
      <AlertMessage errors={errors} ref={alertRef} />
      <Result ref={resultRef} />
    </>
  );
});

export default UserInput;
