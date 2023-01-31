import styled from 'styled-components';
import Link from 'next/link'
export const MenuContainer = styled.div`
  position: sticky;
  height: 100%;
  width: 10vh;
  display: flex;
  flex-direction: column;
`
export const MenuLink = styled(Link)`
  
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #2DE956;
  width: 60px;
  height: 60px;
  margin: 15px 30px;
  border-radius: 10%;
  &:first-child {
    margin-top: 50px
  }
`