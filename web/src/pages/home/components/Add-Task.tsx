import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import BasicSelect from './Select';
import OutlinedInput from '@mui/material/OutlinedInput';
import {
  Box,
  ButtonGroup,
  Checkbox,
  Divider,
  FormControlLabel,
  Grid,
  TextField
} from '@mui/material';
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';
import { CreateTaskInputParams, CreateTaskParams, ErrorField } from '@/types/Common';
import AddTaskName from './Add-Task-Name';

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

const Form = (props: React.DetailedHTMLProps<React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>) => {
  const { children, ...otherProps} = props;
  return (
    <form
      style={{
        padding: "20px",
        paddingLeft: "56px",
        paddingRight: "56px",
      }}
      {...otherProps}
    >
      {children}
    </form>
  );
}

export interface InputParams {
  name: string;
  selectSql: string;
}

interface AddTaskDialogProps {
  open: boolean;
  handleClose: () => void;
}

export default function AddTaskDialog(props: AddTaskDialogProps) {
  const { open, handleClose } = props;
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<InputParams>();
  const submitRef = React.useRef<HTMLInputElement>(null);

  const [data, setData] = React.useState<CreateTaskParams>({
    name: "",
    source: {
      client: "",
      datasource: "",
      database: "",
      table: [],
      selectSql: "",
      taskSplitMode: 1,
    },
    target: {
      datasource: "",
      database: "",
      importDataMode: 1,
    },
    concurrent: 1,
    isSyncSchema: false,
  });

  const [error, setError] = React.useState<ErrorField<CreateTaskInputParams>>({
    name: false,
    selectSql: false,
  });

  const handleClick = () => {
    submitRef.current?.click();
  }

  React.useEffect(() => {
    const subscription = watch((value, { name }) => {
      console.log(value);
      if (name) {
        setError({
          ...error,
          [name]: value[name] === "",
        });
      }
    });
    return () => subscription.unsubscribe();
  }, [watch, error]);

  React.useEffect(() => {
    setValue("name", "TASK" + +new Date());
  }, []);

  const onSubmit: SubmitHandler<InputParams> = (value, event) => {
    console.log("submit", value);

  }

  const onError: SubmitErrorHandler<InputParams> = (err, event) => {
    const errorKeys = Object.keys(err);
    const newErrors = Object.assign({}, ...errorKeys.map(k => ({[k]: true})));
    console.log("error", err);
    setError({
      ...error,
      ...newErrors,
    });
  }

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
          <Form onSubmit={handleSubmit(onSubmit, onError)}>
            <AddTaskName
              data={data}
              setData={setData}
              error={error}
              register={register}
              errors={errors.name}
            />

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
            <input hidden type={"submit"} ref={submitRef}/>
          </Form>
        </DialogContent>

        <DialogActions>
          <Button autoFocus onClick={handleClick}>
            提交
          </Button>
          <Box sx={{width: 48}}/>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
