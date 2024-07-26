import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import { FormButtonProps } from "../../types/componetsType";

const FormButton: React.FC<FormButtonProps> = ({ children }) => {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="contained">{children}</Button>
    </Stack>
  );
};

export default FormButton;
