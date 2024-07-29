import * as React from "react";

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
        <a href="">Sair</a>
      </HiAndByeContainer>
    </HeaderContainer>
  );
};

export default Header;
