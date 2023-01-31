import { MenuLinkStyled } from '@/components/menu_link/menu_link.styles';
import { MenuLink } from '@/components/menu_link/menu_link';

export const Menu = () => {
  return (
    <>
      <MenuLinkStyled>
        <MenuLink>1</MenuLink>
        <MenuLink>2</MenuLink>
        <MenuLink>3</MenuLink>
        <MenuLink>4</MenuLink>
        <MenuLink>5</MenuLink>
      </MenuLinkStyled>
    </>
  )
}