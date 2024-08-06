import { styled } from "@mui/material/styles";
import { InputLabel, OutlinedInput, TextField } from "@mui/material";

export const FormInputText = styled(TextField)(({ theme }) => ({
  width: "90%",
  margin: "auto",
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      border: "2px solid",
      borderColor: theme.palette.primary.main,
    },
    "&:hover fieldset": {
      borderColor: theme.palette.primary.main,
    },
    "&.Mui-focused fieldset": {
      borderColor: theme.palette.primary.main,
    },
    "& .MuiOutlinedInput-input::placeholder": {
      color: theme.palette.secondary.main,
    },
  },
  "& .MuiInputLabel-root": {
    backgroundColor: "#fff",
    paddingLeft: "2px",
    paddingRight: "2px",
    borderRadius: "2px",
  },
  "& .MuiInputLabel-shrink": {
    backgroundColor: "#fff",
  },
  backgroundColor: "#fff",
}));
export const FormOutlinedInputText = styled(OutlinedInput)(({ theme }) => ({
  width: "90%",
  margin: "auto",
  "& .MuiOutlinedInput-notchedOutline": {
    border: "2px solid",
    borderColor: theme.palette.primary.main,
  },
  "&:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: theme.palette.primary.main,
  },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: theme.palette.primary.main,
  },
  "& .MuiOutlinedInput-input::placeholder": {
    color: theme.palette.secondary.main,
  },
  "& .MuiInputLabel-root": {
    backgroundColor: "#fff",
    paddingLeft: "2px",
    paddingRight: "2px",
    borderRadius: "2px",
  },
  "& .MuiInputLabel-shrink": {
    backgroundColor: "#fff",
  },
  backgroundColor: "#fff",
}));
export const FormInputLabel = styled(InputLabel)`
  margin-left: 21px;
  background-color: #fff;
  padding-left: 2px;
  padding-right: 2px;
  border-radius: 2px;
`;
