import styled from 'styled-components';
import Link from 'next/link';
export const ButtonDefault = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background: linear-gradient(90deg, #5199e4, transparent) #2196f3;
  font-family: inherit;
  color: #fff;
  text-decoration: none;
  transition: background-color 1s;
  :hover {
    background-color: #ff97e5;
    color: #fff;
  }
`