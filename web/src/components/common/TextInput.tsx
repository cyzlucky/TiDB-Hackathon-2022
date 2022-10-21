import { Grid, TextField, InputProps, Theme, SxProps } from "@mui/material";
import { errorsMessage, labelStyle, textFieldContainer } from "@/styles/mui/Common";
import { FieldError, RegisterOptions, UseFormRegister } from "react-hook-form";
import { ErrorField } from "@/types/Common";

interface TextInputProps {
  title: string;
  label: string;
  register: UseFormRegister<any>;
  placeholder: string;
  error: ErrorField<{ [key: string]: boolean }>;
  options?: RegisterOptions;
  errors?: FieldError | undefined;
  type?: string;
  inputProps?: Partial<InputProps>;
  sx?: SxProps<Theme>;
}

export default function TextInput(props: TextInputProps) {
  const {
    register,
    title,
    label,
    placeholder,
    error,
    options,
    errors,
    type,
    inputProps
  } = props;

  return (
    <Grid sx={textFieldContainer}>
      <TextField
        label={title}
        fullWidth
        placeholder={placeholder}
        error={errors ? true : error[label]}
        type={ type ? type : "text" }
        InputProps={inputProps}
        autoComplete="off"
        InputLabelProps={{shrink: true}}
        sx={{}}
        {...register(label, options)}
      />
      {
        errors &&
        <Grid sx={errorsMessage}>
          {errors.message}
        </Grid>
      }
    </Grid>
  );
}
