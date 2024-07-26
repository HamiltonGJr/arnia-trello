import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import FormButton from "../../components/FormButton";
// import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Box component="form" autoComplete="off">
      <h1>Arnia Trello</h1>
      <TextField id="outlined-basic" label="E-mail" variant="outlined" />
      <TextField id="outlined-basic" label="Senha" variant="outlined" />
      <FormButton>Entrar</FormButton>
      {/* <Link to={"register"}>Cadastre-se</Link> */}
    </Box>
  );
};

export default Login;
