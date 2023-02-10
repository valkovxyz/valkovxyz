import styled from 'styled-components';
import { ButtonDefault } from '@/components/button/button.styles';

export const HeaderStyled = styled.header`
  @keyframes ShowUp {
    from {
      opacity: 0;
    } to {
        opacity: 1;
      }
  }
  
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  width: 100vw;
  padding: 20px 40px;
  animation: 1s ease-out 1s 1 backwards ShowUp;
`

export const HeaderButton = styled(ButtonDefault)`
  font-weight: bold;
  padding: 10px 20px;
`