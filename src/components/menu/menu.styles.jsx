import styled from 'styled-components';
import Link from 'next/link'
export const MenuContainer = styled.div`
  position: sticky;
  height: 100%;
  width: 6%;
  min-height: 85vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`
export const MenuLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  margin: 15px 30px;
  border-radius: 10%;
  background: linear-gradient(-90deg, #5199e4, transparent) #2196f3;
  font-family: inherit;
  color: #fff;
  text-decoration: none;
  transition: background-color 1s;
  place-content: center;
  :hover {
    background-color: #2DE956;
    color: #fff;
  }
`