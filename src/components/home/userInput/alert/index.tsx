import React, { useImperativeHandle } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle/AlertTitle";
import Slide, { SlideProps } from "@mui/material/Slide/Slide";
import { TransitionProps } from "@mui/material/transitions";
import Fade from "@mui/material/Fade";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function SlideTransition(props: SlideProps) {
  return <Slide {...props} direction="left" />;
}

export const AlertMessage = React.forwardRef<any>((props, alertRef) => {
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
      openAlert: () => handleClick(SlideTransition),
      closeAlert: () => handleClose(),
    };
  });

  const handleClick =
    (
      Transition: React.ComponentType<
        TransitionProps & {
          children: React.ReactElement<any, any>;
        }
      >
    ) =>
    () => {
      setState({
        open: true,
        Transition,
      });
    };
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
    <Stack spacing={2} sx={{ width: "100%" }}>
      <Button variant="outlined" onClick={handleClick(SlideTransition)}>
        Open success snackbar
      </Button>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        TransitionComponent={state.Transition}
        open={state.open}
        autoHideDuration={3000}
        onClose={handleClose}
      >
        <Alert
          sx={{ backgroundColor: "rgba(9, 211, 172,0.8)", width: "100%" }}
          severity="success"
        >
          <AlertTitle>Success</AlertTitle>
          This is a success alert — <strong>check it out!</strong>
        </Alert>
      </Snackbar>
    </Stack>
  );
});

export default AlertMessage;
