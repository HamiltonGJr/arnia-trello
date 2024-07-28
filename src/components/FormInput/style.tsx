import { styled } from "@mui/material/styles";
import { TextField } from "@mui/material";

export const FormInputText = styled(TextField)(({ theme }) => ({
  width: "90%",
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      border: "2px solid",
      borderColor: theme.palette.primary.main,
    },
    "&:hover fieldset": {
      borderColor: theme.palette.primary.main,
    },
  },
}));
