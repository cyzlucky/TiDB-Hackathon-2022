import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import './styles/font.css';
import "@/libs/router";
import App from './App';
import { BrowserRouter } from "react-router-dom";
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '@/styles/mui/MuiTheme';
import { SnackbarProvider, SnackbarKey, closeSnackbar } from 'notistack';
import { IconButton } from "@mui/material";
import { snackbarCloseButton } from '@/styles/mui/Common';
import { Close } from "@mui/icons-material";
import DefaultSnackbar from "@/components/snackbar/default";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <ThemeProvider theme={theme}> */}
        <SnackbarProvider
          maxSnack={10}
          action={(key: SnackbarKey) => (
            <IconButton
              sx={snackbarCloseButton}
              onClick={() => closeSnackbar(key)}
            >
              <Close sx={{width: "16px", height: "16px",}}/>
            </IconButton>
          )}
          autoHideDuration={2000}
          Components={{
            default: DefaultSnackbar,
            info: DefaultSnackbar,
            error: DefaultSnackbar,
            warning: DefaultSnackbar,
            success: DefaultSnackbar,
          }}
        >
          <App />
        </SnackbarProvider>
      {/* </ThemeProvider> */}
      <CssBaseline />
    </BrowserRouter>
  </React.StrictMode>
)
