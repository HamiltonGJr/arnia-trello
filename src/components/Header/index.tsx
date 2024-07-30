import * as React from "react";
import { Link } from "react-router-dom";

import {
  HeaderContainer,
  HeaderSubTitle,
  HeaderTitle,
  HiAndByeContainer,
} from "./style";

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderTitle variant="h1">Arnia Trello</HeaderTitle>

      <HiAndByeContainer>
        <HeaderSubTitle variant="h3">Olá, Hamilton</HeaderSubTitle>
        <Link to={"/"}>Sair</Link>
      </HiAndByeContainer>
    </HeaderContainer>
  );
};

export default Header;
