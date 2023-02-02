import { HeaderStyled } from '@/components/header/header.styles';
import React from "react";

 const Header = () => {
  return (
    <>
      <HeaderStyled>
        header
      </HeaderStyled>
    </>
  )
}

const HeaderMemo = React.memo(Header)
export default HeaderMemo