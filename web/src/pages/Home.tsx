import { Grid, styled, GridProps, Box } from "@mui/material";

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
}));

export default function Home() {

  return (
    <>
      <MenuGrid>
        <Box sx={{width: "100px"}}/>
        <LogoGrid>
          数据迁移
        </LogoGrid>
        <Box sx={{flexGrow: 1}}/>

      </MenuGrid>
      <Grid>
        task
      </Grid>
    </>
  );
}
