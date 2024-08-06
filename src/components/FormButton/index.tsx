import * as React from "react";
import { Button, Stack } from "@mui/material";

import { FormButtonProps } from "../../types/componetsType";

const FormButton: React.FC<FormButtonProps> = ({ children, onClick, type }) => {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="contained" onClick={onClick} type={type}>
        {children}
      </Button>
    </Stack>
  );
};

export default FormButton;
