import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

interface BasicSelectProps {
  label: string;
  name: string;
}

export default function BasicSelect(props: BasicSelectProps) {
  const { label, name } = props;
  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 360 }}>
      <FormControl fullWidth>
        <InputLabel id={`select-${label}-label`}>
          {name}
        </InputLabel>
        <Select
          labelId={`select-${label}-label`}
          id={`select-${label}`}
          value={age}
          label={name}
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
