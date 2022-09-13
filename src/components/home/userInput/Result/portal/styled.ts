import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";

type IProps = {
  ref: any;
};

export const ModalContainer = styled.div<IProps>`
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(89, 89, 89, 0.8);
  background-position: center;
  background-size: cover;
  left: 0;
  top: 0;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: display-modal-in 0.2s ease-in-out;

  @keyframes display-modal-in {
    from {
      opacity: 0;
      transform: scale(0.9);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
  .MuiContainer-root {
    position: fixed;
    top: 25%;
  }
  #modal-cls-btn {
    position: absolute;
    right: -50px;
    top: -50px;
    background-color: transparent;
    border-radius: 50%;
    padding: 5px 10px;
    border: 2px solid ${(props) => props.theme.colors.green};
    cursor: pointer;
    :hover {
      background-color: ${(props) => props.theme.colors.green};
      border: 2px solid ${(props) => props.theme.colors.white};
    }
  }
`;

export const ICloseIcon = styled(CloseIcon)`
  color: ${(props) => props.theme.colors.white};
`;
