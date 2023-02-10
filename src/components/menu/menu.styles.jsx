import styled from 'styled-components';
import { ButtonDefault } from '@/components/button/button.styles';
import { Tooltip } from '@nextui-org/react';
export const MenuContainer = styled.div`
  position: sticky;
  height: 100%;
  width: 6%;
  min-height: 85vh;
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`
export const MenuLink = styled(ButtonDefault)`
  width: 60px;
  height: 60px;
  margin: 15px 0 15px 30px;
`

export const MenuTooltip = styled(Tooltip)`
  @keyframes ShowUp {
    from {
      opacity: 0;
    } to {
        opacity: 1;
      }
  }
  animation: 1s ease-in-out 1s 1 backwards ShowUp;
`