import styled from 'styled-components';
import Image from 'next/image';
import { Button } from '@/components/button/button';
import { ButtonDefault } from '@/components/button/button.styles';

export const ProjectContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;

  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    width: 100vw;
  }
`

export const ProjectNameContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 40vw;
`

export const ProjectTitle = styled.h1`
  font-size: 25px;
  font-weight: bold;
  color: #fff;
`


export const ProjectImageContainer = styled.div`
  width: 40vw;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-right: 20px;
`

export const ProjectImage = styled(Image)`
  cursor: pointer;
  margin: 10px;
  border-radius: 10px;
  :not(:first-child) {
    width: 18.43vw;
    height: 25.5vh;
  }
  :first-child {
    width: 40vw;
    height: 50vh;
  }

  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0;
    width: 70vw;
    :not(:first-child) {
      width: 40vw;
      height: 20vh;
      margin: 5px 0 ;
    }
    :first-child {
      width: 40vw;
      height: 20vh;
      margin: 5px 0 ;
    }
  }
`

export const ProjectInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 40vw;
  margin-left: 20px;
  @media screen and (max-width: 800px) {
    display: flex;
    align-items: center;
    margin: 0;
    width: 70vw;
  }
`

export const ProjectDescriptionContainer = styled.div`

`

export const ProjectDescription = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  width: 40vw;
`

export const ProjectTechnologiesContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 40vw;
`

export const ProjectTechnologyChip = styled.div`
  height: 50px;
  border-radius: 10px;
  background-color: #575757;
  display: inline-block;
  padding: 0 5px;
  transition: 0.5s ease-in-out;
  margin: 0 10px 10px 0;
  p {
    color: white;
    font-weight: bold;
    transition: 0.5s ease-in-out;
  }
  :hover {
    background-color: #5199e4;
  }
`

export const ProjectTechnologies = styled.div`
  
`


export const ProjectButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  width: 40vw;
  flex-wrap: wrap;
`

export const ProjectButton = styled(ButtonDefault)`
  width: 180px;
  height: 40px;
  margin: 0 0 10px 10px;
  font-weight: bold;
`
