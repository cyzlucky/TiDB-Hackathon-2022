import { Grid, IconButton } from "@mui/material";
import { submitButtonContainer, submitSvg } from "@/styles/mui/Common";
import EastIcon from "@mui/icons-material/East";

interface SubmitButtonProps {
  handleClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
  type?: "button" | "submit" | "reset" | undefined,
}

export default function SubmitButton(props: SubmitButtonProps) {
  const { handleClick, type } = props;

  return (
    <Grid sx={submitButtonContainer}>
      <IconButton
        color="primary"
        type={type}
        onClick={handleClick}
        sx={submitSvg}
      >
        <EastIcon />
      </IconButton>
    </Grid>
  );
}
