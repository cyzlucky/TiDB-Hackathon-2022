import {
  SxProps,
  Theme
} from "@mui/material";

export const snackbarContainer: SxProps<Theme> = {
  display: "flex",
  minWidth: {xs: "344px !important"},
  padding: "4px 0px",
  "& .default-snackbar": {
    backgroundColor: "rgba(13, 114, 204, 0.5)",
    backdropFilter: 'blur(8px)',
    border: "1px solid rgba(35, 144, 194, 0.8)",
    color: "#ffffff"
  },
  "& .info-snackbar": {
    backgroundColor: "rgba(13, 114, 204, 0.5)",
    backdropFilter: 'blur(8px)',
    border: "1px solid rgba(35, 144, 194, 0.8)",
    color: "#ffffff"
  },
  "& .info-icon": {
    color: "rgba(0, 208, 255, 1)"
  },
  "& .success-snackbar": {
    backgroundColor: "rgb(7 102 35 / 50%)",
    backdropFilter: 'blur(8px)',
    border: "1px solid rgb(35 194 61 / 80%)",
    color: "#ffffff"
  },
  "& .success-snackbar .MuiButtonBase-root": {
    backgroundColor: "rgb(35 201 144 / 50%)",
    border: "1px solid rgb(0 255 17 / 80%)",
  },
  "& .success-icon": {
    color: "#01ff5b"
  },
  "& .warning-snackbar": {
    backgroundColor: "rgb(108 83 0 / 50%)",
    backdropFilter: 'blur(8px)',
    border: "1px solid rgb(194 151 35 / 80%)",
    color: "#ffffff"
  },
  "& .warning-snackbar .MuiButtonBase-root": {
    backgroundColor: "rgb(255 208 5 / 50%)",
    border: "1px solid rgb(194 151 35 / 80%)",
  },
  "& .warning-icon": {
    color: "#ffbc00"
  },
  "& .error-snackbar": {
    backgroundColor: "rgb(108 0 0 / 50%)",
    backdropFilter: 'blur(8px)',
    border: "1px solid rgb(194 35 35 / 80%)",
    color: "#ffffff"
  },
  "& .error-snackbar .MuiButtonBase-root": {
    backgroundColor: "rgb(108 0 0 / 50%)",
    border: "1px solid rgb(194 35 35 / 80%)",
  },
  "& .error-icon": {
    color: "#ff1a1a"
  },
}

export const snackbarContext: SxProps<Theme> = {
  width: "100%",
  height: "56px",
  borderRadius: "8px",
  display: "flex",
  alignItems: "center",
  padding: "8px",
  paddingLeft: "16px",
  paddingRight: "16px",
}

export const snackbarMessage: SxProps<Theme> = {
  flexGrow: 1,
  paddingLeft: "8px",
  paddingRight: "8px",
}

export const snackbarIcon: SxProps<Theme> = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  "& svg": {
    width: "1.5em !important",
    height: "1.5em !important",
  },
}
