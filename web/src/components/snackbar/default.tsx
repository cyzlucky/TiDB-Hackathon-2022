import { forwardRef } from "react";
import { CustomContentProps, SnackbarContent } from "notistack";
import { Grid } from "@mui/material";
import {
  snackbarContainer,
  snackbarContext,
  snackbarIcon,
  snackbarMessage
} from "@/styles/mui/SnackbarSX";

interface DefaultSnackbarProps extends CustomContentProps {
  allowDownload?: boolean;
}

const DefaultSnackbar = forwardRef<HTMLDivElement, DefaultSnackbarProps>(
  ({ id, ...props }, ref) => {

  const { variant, message, action, iconVariant } = props;

  return (
    <SnackbarContent ref={ref} >
      <Grid sx={snackbarContainer}>
        <Grid sx={snackbarContext} className={`${variant}-snackbar`}>
          <Grid sx={snackbarIcon} className={`${variant}-icon`}>
            {iconVariant[variant]}
          </Grid>
          <Grid sx={snackbarMessage}>
            {message}
          </Grid>
          {action && typeof action === "function"
            ? action(id)
            : action}
        </Grid>
      </Grid>
    </SnackbarContent>
  );
});

DefaultSnackbar.displayName = "DefaultSnackbar";

export default DefaultSnackbar;
