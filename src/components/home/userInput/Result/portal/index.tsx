import React from "react";
import { createPortal } from "react-dom";
import StickyHeadTable from "./paymentSchedule";
import { IProps } from "./portal";
import { ICloseIcon, ModalContainer } from "./styled";
import Container from "@mui/material/Container";
import { handleScroll } from "../../../../../customHook/handleScroll";

const Portal: React.FC<IProps> = ({ open, setOpen }) => {
  const ref = React.useRef<any>();

  if (!open) return null;

  return createPortal(
    <ModalContainer ref={ref}>
      <Container sx={{ position: "relative" }}>
        <StickyHeadTable />
        <button onClick={() => setOpen(false)} id="modal-cls-btn">
          <ICloseIcon />
        </button>
      </Container>
    </ModalContainer>,
    document.getElementById("Iroot") as HTMLElement
  );
};

export default Portal;
