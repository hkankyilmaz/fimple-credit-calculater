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
  animation: display-modal-in 0.3s ease-in-out;

  .MuiContainer-root {
    position: fixed;
    top: 25%;
    animation: display-modal-in 0.3s ease-in-out;
  }
  #modal-cls-btn {
    position: absolute;
    right: -50px;
    top: -60px;
    background-color: ${(props) => props.theme.colors.white};
    border-radius: ${(props) => props.theme.radius.small};
    padding: 5px 10px;
    border: 2px solid ${(props) => props.theme.colors.white};
    cursor: pointer;
    :hover {
      scale: 1.05;
    }
  }

  @keyframes display-modal-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @media (max-width: 1400px) {
    #modal-cls-btn {
      right: 25px;
      top: -60px;
    }
  }
`;

export const ICloseIcon = styled(CloseIcon)`
  color: ${(props) => props.theme.colors.green};
`;
