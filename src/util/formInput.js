import React from "react";
import { useController, useForm } from "react-hook-form";

import TextField from "@material-ui/core/TextField";

function FormInput({ control, name, label  }) {
    const {
      field: { ref, value,...inputProps },
       fieldState: { invalid, isTouched, isDirty , error},
       formState: { touchedFields, dirtyFields }
    } = useController({
      name,
      control,
      label,
      rules: { required: true },
      defaultValue: ""
    });
    if( typeof(value) == "undefined" || value == "" && isTouched ){
      let message = label + " is required"
      return <TextField {...inputProps} 
      error
      id="outlined-basic" 
      label={label} 
      value = {value}
      variant="outlined" 
      helperText={message}
      inputRef={ref} />; 
    }
  return <TextField {...inputProps} 
    id="outlined-basic" 
    label={label} 
    value = {value}
    variant="outlined" 
    inputRef={ref} />; 
 
}

export default FormInput;
