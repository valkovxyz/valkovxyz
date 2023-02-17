import styled from 'styled-components';
import { ButtonDefault } from '@/components/button/button.styles';
import { Tooltip } from '@nextui-org/react'
export const MenuContainer = styled.div`
  @keyframes ShowUp {
    from {
      opacity: 0;
    } to {
        opacity: 1;
      }
  }
  position: absolute;
  top: 85px;
  left: 0;
  height: 80%;
  width: 6%;
  min-height: 85vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  z-index: 2;

  animation: 1s ease-out 1.3s 1 backwards ShowUp;
  @media screen and (max-width: 800px) {
    margin-left: 10px;
    position: fixed;
  }
`

export const MenuLink = styled(ButtonDefault)`
  width: 60px;
  height: 60px;
  margin: 15px 30px;
  & .active {
    background-color: #2DE956;
  }
`