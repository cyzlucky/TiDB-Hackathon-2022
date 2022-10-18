import { Grid, TextField, InputProps } from "@mui/material";
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
  inputProps?: Partial<InputProps>,
}

export default function TextInput(props: TextInputProps) {
  const { register, title, label, placeholder, error, options, errors, type, inputProps } = props;

  return (
    <Grid sx={textFieldContainer}>
      <Grid sx={labelStyle}>
        {title}
      </Grid>
      <TextField
        fullWidth
        placeholder={placeholder}
        error={error[label]}
        type={ type ? type : "text" }
        InputProps={inputProps}
        autoComplete="off"
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
