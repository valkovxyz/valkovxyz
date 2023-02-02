import { Header } from '@/components/header/header';
import { Footer } from '@/components/footer/footer';
import { WrapperStyled } from '@/components/wrapper/wrapper.styles';

export const Wrapper = ({ children }) => {
  return (
    <>
      <WrapperStyled>
        {children}
      </WrapperStyled>
    </>
  )
}