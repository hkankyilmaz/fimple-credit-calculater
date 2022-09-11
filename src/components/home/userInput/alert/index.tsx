import React, { useImperativeHandle, useContext } from "react";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle/AlertTitle";
import Slide, { SlideProps } from "@mui/material/Slide/Slide";
import { TransitionProps } from "@mui/material/transitions";
import Fade from "@mui/material/Fade";
import LanguageContext from "../../../../store/languageContext";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function SlideTransition(props: SlideProps) {
  return <Slide {...props} direction="left" />;
}

export const AlertMessage = React.forwardRef<any, any>(
  ({ errors }, alertRef) => {
    const { text } = useContext(LanguageContext);
    const [state, setState] = React.useState<{
      open: boolean;
      Transition: React.ComponentType<
        TransitionProps & {
          children: React.ReactElement<any, any>;
        }
      >;
    }>({
      open: false,
      Transition: Fade,
    });

    useImperativeHandle(alertRef, () => {
      return {
        openAlert: () => setState({ Transition: SlideTransition, open: true }),
      };
    });

    const handleClose = (
      event?: React.SyntheticEvent | Event,
      reason?: string
    ) => {
      if (reason === "clickaway") {
        return;
      }

      setState({
        open: false,
        Transition: Fade,
      });
    };

    return (
      <Stack spacing={2}>
        <Snackbar
          sx={{ transform: "translateY(60px)" }}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          TransitionComponent={state.Transition}
          open={state.open}
          autoHideDuration={4000}
          onClose={handleClose}
        >
          {Object.keys(errors).length === 0 ? (
            <Alert
              sx={{
                backgroundColor: "rgba(9, 211, 172,1)",
                width: "100%",
              }}
              severity="success"
            >
              <AlertTitle sx={{ fontWeight: "bold" }}>
                {text.home.alert.success}
              </AlertTitle>
              {text.home.alert.successTitle}
            </Alert>
          ) : (
            <Alert
              sx={{
                backgroundColor: "#ff9999",
                width: "100%",
              }}
              severity="error"
            >
              <AlertTitle sx={{ fontWeight: "bold" }}>
                {text.home.alert.fail}
              </AlertTitle>
              {text.home.alert.failTitle}
            </Alert>
          )}
        </Snackbar>
      </Stack>
    );
  }
);

export default AlertMessage;
