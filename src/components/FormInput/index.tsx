import * as React from "react";

import { FormInputProps } from "../../types/componetsType";
import { FormInputText } from "./style";

const FormInput: React.FC<FormInputProps> = ({ nameInput }) => {
  return (
    <FormInputText
      id="outlined-basic"
      label={nameInput}
      fullWidth
      variant="outlined"
    />
  );
};

export default FormInput;
