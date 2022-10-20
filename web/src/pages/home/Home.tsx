import { Grid, styled, GridProps, Box } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Button from '@mui/material/Button';
import AddTaskDialog from "./components/Add-Task";
import { useState } from "react";

const MenuGrid = styled((props: GridProps) => (
  <Grid {...props}/>
))(({ theme }) => ({
  height: "64px",
  display: "flex",
  alignItems: "center",
  boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
  borderBottom: "1px solid rgb(227, 227, 227)"
}));

const LogoGrid = styled((props: GridProps) => (
  <Grid {...props}/>
))(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  fontWeight: 600,
}));

export default function Home() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <MenuGrid>
        <Box sx={{width: "40px"}}/>
        <LogoGrid>
          数据迁移
        </LogoGrid>
        <Box sx={{flexGrow: 1}}/>
        <Button
          variant="contained"
          color="info"
          endIcon={<AddIcon />}
          sx={{
            color: "white"
          }}
          onClick={handleClickOpen}
        >
          创建任务
        </Button>
        <Box sx={{width: "40px"}}/>
      </MenuGrid>
      <AddTaskDialog
        open={open}
        handleClose={handleClose}
      />
      <Grid>
        task
      </Grid>
    </>
  );
}
