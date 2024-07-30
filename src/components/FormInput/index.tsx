import * as React from "react";
import { FormControl, IconButton, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

import { FormInputProps } from "../../types/componetsType";
import { FormInputLabel, FormInputText, FormOutlinedInputText } from "./style";

const FormInput = ({ nameInput, isPassword }: FormInputProps) => {
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
          </FormControl>
        </>
      ) : (
        <FormInputText
          id="outlined-password-input"
          label={nameInput}
          type="text"
          autoComplete="current-password"
          fullWidth
        />
      )}
    </>
  );
};

export default FormInput;
