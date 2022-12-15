import React from "react";
import {
  FormControl,
  FormGroup,
  FormLabel,
  FormControlLabel,
  Checkbox,
} from "@mui/material";

const FormField = (props) => {
    const handleIsRequiredChange = () => { 
        props.setIsRequired(!props.isRequired);
    }
    const handleIsVisibleChange = () => { 
        props.setIsVisible(!props.isVisible);
    }
  return (
    <FormControl>
      <FormGroup
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <FormLabel component="legend" sx={{ width: "10rem" }}>
          {props.label}
        </FormLabel>
        <FormControlLabel
          control={
            <Checkbox
              checked={props.isRequired}
              onChange={handleIsRequiredChange}
              name="isRequired"
            />
          }
          label="isRequired"
          sx={{ width: "10rem" }}
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={props.isVisible}
              onChange={handleIsVisibleChange}
              name="isVisible"
            />
          }
          label="isVisible"
          sx={{ width: "10rem" }}
        />
      </FormGroup>
    </FormControl>
  );
};

export default FormField;
