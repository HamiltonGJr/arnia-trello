import * as React from "react";
import {
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

import { FormInputProps } from "../../types/componetsType";
import { FormInputLabel, FormInputText, FormOutlinedInputText } from "./style";

const FormInput = ({
  nameInput,
  onChange,
  isPassword,
  error,
  helperText,
}: FormInputProps) => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <>
      {isPassword ? (
        <>
          <FormControl variant="outlined" fullWidth>
            <FormInputLabel htmlFor="outlined-adornment-password">
              {nameInput}
            </FormInputLabel>
            <FormOutlinedInputText
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              label="Senha"
              onChange={onChange}
              error={error}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
            <FormHelperText error>{error ? helperText : ""}</FormHelperText>
          </FormControl>
        </>
      ) : (
        <FormControl variant="outlined" fullWidth>
          <FormInputText
            id="outlined-password-input"
            label={nameInput}
            type="text"
            autoComplete="current-password"
            onChange={onChange}
            error={error}
            fullWidth
          />
          <FormHelperText error>{error ? helperText : ""}</FormHelperText>
        </FormControl>
      )}
    </>
  );
};

export default FormInput;
