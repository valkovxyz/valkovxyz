import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image'

export const ProjectsContainerStyled = styled.div`
  @keyframes ShowProjects {
    from {
      opacity: 0;
    } to {
        opacity: 1;
      }
  }
  display: flex;
  flex-direction: row;
  width: 88vw;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  :nth-child(n+4) {
    animation: 1s ease-out 1s 1 backwards ShowProjects;
  }
`

export const ProjectsBox = styled.div`
  width: 20vw;
  height: 28vh;
  min-width: 350px;
  min-height: 280px;
  padding: 1vw 2vh;
  border-radius: 10px;
  margin: 20px;
  border: none;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  -webkit-box-shadow: 0px 0px 32px -3px rgba(77,152,209,1);
  -moz-box-shadow: 0px 0px 32px -3px rgba(77,152,209,1);
  box-shadow: 0px 0px 15px -3px rgba(77,152,209,1);
  transition: 0.5s;
  :hover {
    -webkit-box-shadow: 0px 0px 32px -3px rgba(77,152,209,1);
    -moz-box-shadow: 0px 0px 32px -3px rgba(77,152,209,1);
    box-shadow: 0px 0px 30px -3px rgba(77,152,209,1);
    transition: 0.5s;
  }
`

export const ProjectsInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: 50px;
  margin-bottom: 20px;
`

export const ProjectsTitle = styled.p`
  font-size: 25px;
  font-weight: bold;
  display: flex;
  height: 100%;
  width: 100%;
  color: #fff;
  margin: 0;
`

export const ProjectsImage = styled(Image)`
  border-radius: 10px;
`

export const ProjectsMoreDetailsButton = styled.div`
  width: 180px;
  height: 40px;
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
  :hover {
    background-color: #2DE956;
    color: #fff;
  }
`