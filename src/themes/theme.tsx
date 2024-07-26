import { createTheme } from "@mui/material";
import { red, deepPurple, yellow } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: deepPurple[700],
    },
    secondary: {
      main: yellow[500],
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
