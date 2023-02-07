import styled from 'styled-components';
import Link from 'next/link';

export const ProjectsContainerStyled = styled.div`
  display: flex;
  flex-direction: row;
  width: 88vw;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`

export const ProjectBox = styled.div`
  width: 30vw;
  height: 20vh;
  padding: 3vw 5vh;
`

export const ProjectTitle = styled.p`
  font-size: 20px;
  font-weight: bold;
`

export const ProjectMoreDetailsButton = styled.div`
  width: 200px;
  height: 50px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.875em 2em;
  background: linear-gradient(90deg, #3f51b5, transparent) #2196f3;
  font-family: inherit;
  color: #fff;
  text-decoration: none;
  transition: background-color 1s;
  place-content: center;
  :hover, :focus {
    background-color: #e91e63;
    color: #fff;
  }
`