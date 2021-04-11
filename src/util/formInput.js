import React from "react";
import { useController, useForm } from "react-hook-form";

import TextField from "@material-ui/core/TextField";

function FormInput({ control, name, label }) {
    const {
      field: { ref, ...inputProps },
      fieldState: { invalid, isTouched, isDirty },
      formState: { touchedFields, dirtyFields }
    } = useController({
      name,
      control,
      label,
      rules: { required: true },
      defaultValue: "",
    });
  
    return <TextField {...inputProps} 
    id="outlined-basic" 
    label={label} 
    variant="outlined" 
    inputRef={ref} />;

}

export default FormInput;
