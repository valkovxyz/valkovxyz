import styled from 'styled-components';
import Image from 'next/image';
import { Button } from '@/components/button/button';
import { ButtonDefault } from '@/components/button/button.styles';

export const ProjectContainer = styled.div`
  width: 100%;
  height: 75vh;
  display: flex;
  justify-content: center;
  padding-right: 6%;
`

export const ProjectTitle = styled.h1`
  font-size: 25px;
  font-weight: bold;
  color: #fff;
  margin-right: 50px;
`

export const ProjectImageContainer = styled.div`
  width: 580px;
  height: 200px;
  display: flex;
  flex-wrap: wrap;
`

export const ProjectImage = styled(Image)`
  cursor: pointer;
  margin: 10px;
  border-radius: 10px;
  :not(:first-child) {
    width: 250px;
    height: 140px;
  }
`

export const ProjectInfo = styled.div`
  display: flex;
  flex-direction: column;
  
`

export const ProjectDescriptionContainer = styled.div`

`

export const ProjectDescription = styled.p`
  
`

export const ProjectTechnologiesContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
`

export const ProjectTechnologyChip = styled.div`
  height: 50px;
  border-radius: 10px;
  background-color: #575757;
  display: inline-block;
  text-align: center;
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
`

export const ProjectButton = styled(ButtonDefault)`
  width: 180px;
  height: 40px;
  margin-left: 10px;
  font-weight: bold;
`
