import { createTheme } from "@mui/material";

export const theme = createTheme({
  status: {
    danger: "#026691",
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
      mobile: 1200,
      tablet: 1200,
      laptop: 1200,
      desktop: 1200,
    }
  },
  components: {
    MuiTooltip: {
      defaultProps: {
        arrow: true,
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {

        }
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          "& .Mui-error": {
            backgroundColor: "rgba(255, 0, 0, 0.3)",
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          color: "#ffffff",
          borderRadius: "0px",
          backgroundColor: "rgba(13, 114, 204, 0.5)",
          "&.Mui-error .MuiOutlinedInput-notchedOutline": {
            border: '2px solid #ff2a2a !important',
            borderLeft: "4px solid #ff2a2a !important",
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            border: '2px solid rgba(49, 211, 255, 1)',
            borderLeft: "4px solid rgba(0, 206, 255, 1)",
          },
          '& .MuiOutlinedInput-notchedOutline': {
            border: '1px solid rgba(49, 211, 255, 0.5)',
            borderLeft: "4px solid rgba(0, 206, 255, 1)",
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            border: '2px solid rgba(49, 211, 255, 1)',
            borderLeft: "4px solid rgba(0, 206, 255, 1)",
          },
        }
      },
    },
  },
  palette: {
    mode: "dark",
    background: {
      default: '#000b2d',
      paper: '#002b53',
    },
  },
});
