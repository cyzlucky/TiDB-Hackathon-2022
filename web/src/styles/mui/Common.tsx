import { SxProps, Theme } from "@mui/material";

export const textFieldContainer: SxProps<Theme> = {
  minWidth: {xs: "296px", md: "424px"},
  position: "relative",
};

export const errorsMessage: SxProps<Theme> = {
  position: "absolute",
  right: "16px",
  bottom: "-20px",
  fontSize: "12px",
  color: "#ff2a2a",
  userSelect: "none",
};

export const labelStyle: SxProps<Theme> = {
  color: "#ffffff",
  userSelect: "none",
  fontSize: "18px",
  fontWeight: "600",
  paddingBottom: "8px",
  paddingLeft: "8px",
};

export const submitButtonContainer: SxProps<Theme> = {
  width: "100%",
  display: "flex",
  justifyContent: "center",
};

export const submitSvg: SxProps<Theme> = {
  color: "rgba(0, 206, 255, 1)",
  backgroundColor: "rgba(13, 114, 204, 0.5)",
  border: "1px solid rgba(35, 144, 194, 1)",
  width: "72px",
  height: "72px",
  "&:hover": {
    backgroundColor: "rgba(13, 114, 204, 0.6)",
    border: "1px solid rgba(0, 206, 255, 0.8)",
  },
}

export const snackbarCloseButton: SxProps<Theme> = {
  ...submitSvg,
  width: "24px",
  height: "24px",
  color: "#ffffff",
};
