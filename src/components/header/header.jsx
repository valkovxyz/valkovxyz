import { HeaderButton, HeaderStyled } from '@/components/header/header.styles';
import React from "react";
import { ButtonDefault } from '@/components/button/button.styles';

export const Header = () => {
  return (
    <>
      <HeaderStyled>
        <HeaderButton href={'/sign-in'}> Sign-in </HeaderButton>
      </HeaderStyled>
    </>
  )
}

