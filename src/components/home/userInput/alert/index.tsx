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

export const AlertMessage = React.forwardRef<any, any>((props, alertRef) => {
  const { text } = useContext(LanguageContext);
  console.log(props);
  const Iseverity: any = props.errors.err === null ? "success" : "error";
  const bg: string = props.erros.err !== null ? "rgba(9, 211, 172,0.8)" : "red";
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

  console.log(state);

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

  console.log(state);

  return (
    <Stack spacing={2}>
      <Snackbar
        sx={{ transform: "translateY(60px)" }}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        TransitionComponent={state.Transition}
        open={state.open}
        autoHideDuration={3000}
        onClose={handleClose}
      >
        <Alert
          sx={{
            backgroundColor: { bg },
            width: "100%",
          }}
          severity={Iseverity}
        >
          <AlertTitle sx={{ fontWeight: "bold" }}>
            {text.home.alert.success}
          </AlertTitle>
          {text.home.alert.successTitle}
        </Alert>
      </Snackbar>
    </Stack>
  );
});

export default AlertMessage;
