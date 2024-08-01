import * as React from "react";
import { Button, Stack } from "@mui/material";

import { FormButtonProps } from "../../types/componetsType";

const FormButton: React.FC<FormButtonProps> = ({ children, onClick }) => {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="contained" onClick={onClick}>
        {children}
      </Button>
    </Stack>
  );
};

export default FormButton;
