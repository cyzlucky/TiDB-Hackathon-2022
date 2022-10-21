import {
  Box,
  Button,
  ButtonGroup,
  Checkbox,
  FormControlLabel,
  Grid,
  OutlinedInput,
  styled,
  TextField
} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { CreateTaskInputParams, CreateTaskParams, ErrorField } from "@/types/Common";
import { InputParams } from "./Add-Task";
import { FieldError, UseFormRegister } from "react-hook-form";
import TextInput from "@/components/common/TextInput";

const Container = styled(Grid)(() => ({
  width: "100%",
  marginBottom: "24px",
  marginTop: "8px",
  alignItems: "center",
  display: "flex",
  flexDirection: "column"
}));

interface AddTaskNameProps {
  data: CreateTaskParams;
  setData: React.Dispatch<React.SetStateAction<CreateTaskParams>>;
  error: ErrorField<CreateTaskInputParams>;
  register: UseFormRegister<InputParams>;
  errors: FieldError | undefined;
}

export default function AddTaskName(props: AddTaskNameProps) {
  const { data, setData, error, register, errors } = props;

  const handleReduce = () => {
    setData((value) => {
      return {
        ...value,
        concurrent: Math.max(value.concurrent - 1, 0)
      }
    });
  }

  const handleInput = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const newValue = parseInt(event.target.value, 10);
    if (Number.isNaN(newValue)) {
      return;
    }
    setData((value) => {
      return {
        ...value,
        concurrent: newValue
      }
    });
  };

  const handleAdd = () => {
    setData((value) => {
      return {
        ...value,
        concurrent: Math.max(value.concurrent + 1, 0)
      }
    });
  }

  const handleChecked = () => {
    setData((value) => {
      return {
        ...value,
        isSyncSchema: !value.isSyncSchema
      }
    });
  }

  return (
    <Container>
      <Grid>
        <TextInput
          title="任务名称"
          label="name"
          register={register}
          error={error}
          errors={errors}
          placeholder=""
          options={{
            required: "任务名称是必须的",
          }}
        />
      </Grid>
      <Box sx={{height: "32px"}}/>
      <Grid
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <FormControlLabel
          control={<Checkbox/>}
          checked={data?.isSyncSchema}
          label="是否同步Schema"
          onChange={handleChecked}
        />
        <Box sx={{width: 48}}/>
        <Grid>
          读写并行度：
        </Grid>
        <ButtonGroup>
          <Button
            aria-label="reduce"
            onClick={handleReduce}
          >
            <RemoveIcon fontSize="small" />
          </Button>
          <OutlinedInput
            value={data?.concurrent}
            sx={{width: "56px", borderColor: "red", height: "40px"}}
            onChange={handleInput}
          />
          <Button
            aria-label="increase"
            onClick={handleAdd}
          >
            <AddIcon fontSize="small" />
          </Button>
        </ButtonGroup>
      </Grid>
    </Container>
  );
}
