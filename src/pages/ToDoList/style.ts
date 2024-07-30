import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";

export const ToDoContainer = styled(Box)`
  height: 87vh;
  width: 100%;
  margin-top: 33px;
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
`;
export const ToDoContainerCard = styled(Box)(({ theme }) => ({
  width: "22%",
  height: "100%",
  padding: "15px 15px 0 15px",
  borderRadius: "06px 06px 0 0",
  backgroundColor: `${theme.palette.primary.light}`,
}));
export const ToDoTitle = styled(Typography)(({ theme }) => ({
  fontSize: "26px",
  fontFamily: "Poppins",
  fontWeight: "600",
  color: `${theme.palette.primary.main}`,
}));
