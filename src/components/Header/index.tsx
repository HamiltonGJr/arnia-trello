import * as React from "react";

import {
  HeaderContainer,
  HeaderSubTitle,
  HeaderTitle,
  HiAndByeContainer,
  LinkBox,
} from "./style";

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderTitle variant="h1">Arnia Trello</HeaderTitle>

      <HiAndByeContainer>
        <HeaderSubTitle variant="h3">Olá, Hamilton</HeaderSubTitle>
        <LinkBox to={"/"}>Sair</LinkBox>
      </HiAndByeContainer>
    </HeaderContainer>
  );
};

export default Header;
