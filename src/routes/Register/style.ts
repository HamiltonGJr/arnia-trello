import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";

export const FormContainer = styled(Box)(({ theme }) => ({
  width: "25%",
  height: "75%",
  padding: "25px 10px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  alignItems: "center",
  gap: "12px",
  border: `2px solid ${theme.palette.primary.main}`,
  borderRadius: "05px",
  backgroundColor: "#fff",
}));
export const TitleArnia = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontFamily: "Poppins",
}));
export const FormBox = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;
