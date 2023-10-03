import { Autocomplete, TextField } from '@mui/material';
import React from 'react'
import { Controller } from "react-hook-form";

const CustomAutocomplete = ({ control, name, label, errors, placeholder, options, values, ...props }) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={{
        required: 'requerido',
      }}
      render={({ field: { onChange , value}  }) => (
        <Autocomplete
          id={name}
          size='small'
          sx={{ mt: .5 }}
          isOptionEqualToValue={(option, value) => option.label === value.label}
          options={ options || []}
          onChange={(event, values) => {
            onChange(values || null);
          }}
          renderInput={(params) => (
            <TextField 
            {...params} 
            label={label}
            placeholder={label}
            />
          )}
          {...props}
        />
      )} 
      />
  )
}

export default CustomAutocomplete;