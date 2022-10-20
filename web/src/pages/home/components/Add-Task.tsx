import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Box, ButtonGroup, Checkbox, Divider, FormControlLabel, Grid, TextField } from '@mui/material';
import BasicSelect from './Select';
import OutlinedInput from '@mui/material/OutlinedInput';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
  "& .MuiDialog-paper": {
    maxWidth: "100%",
  }
}));

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

function BootstrapDialogTitle(props: DialogTitleProps) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

interface AddTaskDialogProps {
  open: boolean;
  handleClose: () => void;
}

export default function AddTaskDialog(props: AddTaskDialogProps) {
  const { open, handleClose } = props;
  const [count, setCount] = React.useState(1);

  return (
    <div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="add-task-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="add-task-dialog-title" onClose={handleClose}>
          创建任务
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <form
            style={{
              padding: "20px",
              paddingLeft: "56px",
              paddingRight: "56px",
            }}
          >
            <Grid
              sx={{
                width: "100%",
                marginBottom: "24px",
                marginTop: "8px",
                alignItems: "center",
                display: "flex",
                flexDirection: "column"
              }}
            >
              <TextField
                id="task-name"
                label="任务名称"
                variant="outlined"
                sx={{ minWidth: "460px"}}
              />
              <Box sx={{height: "24px"}}/>
              <Grid
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <FormControlLabel control={<Checkbox defaultChecked />} label="是否同步Schema" />
                <Box sx={{width: 48}}/>
                <Grid>
                  读写并行度：
                </Grid>
                <ButtonGroup>
                  <Button
                    aria-label="reduce"
                    onClick={() => {
                      setCount(Math.max(count - 1, 0));
                    }}
                  >
                    <RemoveIcon fontSize="small" />
                  </Button>
                  <OutlinedInput
                    value={count}
                    sx={{width: "56px", borderColor: "red", height: "40px"}}
                    onChange={(event) => {
                      setCount(parseInt(event.target.value, 10));
                    }}
                  />
                  <Button
                    aria-label="increase"
                    onClick={() => {
                      setCount(count + 1);
                    }}
                  >
                    <AddIcon fontSize="small" />
                  </Button>
                </ButtonGroup>
              </Grid>
            </Grid>
            {/* <Divider /> */}
            <Grid
              sx={{
                display: "flex",
                marginTop: "40px"
              }}
            >
              <Grid
                sx={{marginRight: 4}}
              >
                <Grid
                  sx={{fontWeight: 600, paddingBottom: "24px"}}
                >
                  源集群
                </Grid>
                <BasicSelect
                  label=''
                  name='选择客户端'
                />
                <Box sx={{height: 32}}/>
                <BasicSelect
                  label=''
                  name='选择数据源'
                />
                <Box sx={{height: 32}}/>
                <BasicSelect
                  label=''
                  name='选择DB'
                />
                <Box sx={{height: 32}}/>
                <BasicSelect
                  label=''
                  name='选择Table (多选)'
                />
                <Box sx={{height: 32}}/>
                <TextField
                  id="task-name"
                  label="查询语句"
                  variant="outlined"
                  sx={{ minWidth: "360px"}}
                />
                <Box sx={{height: 32}}/>
                <BasicSelect
                  label=''
                  name='拆分模式'
                />
              </Grid>
              <Divider orientation="vertical" flexItem />
              <Grid
                sx={{marginLeft: 4}}
              >
                <Grid
                  sx={{fontWeight: 600, paddingBottom: "24px"}}
                >
                  目标集群
                </Grid>
                <BasicSelect
                  label=''
                  name='选择数据源'
                />
                <Box sx={{height: 32}}/>
                <BasicSelect
                  label=''
                  name='选择DB'
                />
                <Box sx={{height: 32}}/>
                <BasicSelect
                  label=''
                  name='导入模式'
                />
              </Grid>
            </Grid>
          </form>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            提交
          </Button>
          <Box sx={{width: 48}}/>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
