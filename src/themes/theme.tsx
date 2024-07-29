import { createTheme } from "@material-ui/core";
import { red, deepPurple, yellow } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: deepPurple[700],
      light: deepPurple[400],
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
