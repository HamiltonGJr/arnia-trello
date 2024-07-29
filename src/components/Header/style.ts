import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";

export const HeaderContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  padding: "15px",
  justifyContent: "space-between",
  alignItems: "center",
  color: "#fff",
  backgroundColor: `${theme.palette.primary.main}`,
}));
export const HeaderTitle = styled(Typography)`
  padding-left: 25px;
  font-family: Poppins, sans-serif;
  font-weight: 700;
  font-size: 36px;
`;
export const HiAndByeContainer = styled(Box)`
  padding-right: 25px;
  font-family: Poppins, sans-serif;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
`;
export const HeaderSubTitle = styled(Typography)`
  font-size: 25px;
  font-weight: 700;
`;
