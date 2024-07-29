import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const AppContainer = styled(Box)(({ theme }) => ({
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontFamily: "Poppins",
  backgroundColor: `${theme.palette.secondary.light}`,
}));
