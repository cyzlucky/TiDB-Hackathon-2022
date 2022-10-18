import { CircularProgress, Grid } from '@mui/material';

export default function Loading() {
  return (
    <Grid sx={{
      width: "100%",
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      // backgroundColor: "#000b2c",
    }}>
      <CircularProgress
        variant="determinate"
        sx={{
          color: "#00ceff",
        }}
        size={40}
        thickness={4}
        value={100}
      />
    </Grid>
  )
}
