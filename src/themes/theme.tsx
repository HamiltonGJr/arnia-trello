import { createTheme } from "@material-ui/core";
import { red, deepPurple, yellow, grey } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: deepPurple[900],
      light: deepPurple[100],
    },
    secondary: {
      main: yellow[500],
      light: grey[100],
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
