import styled from 'styled-components';
import Image from 'next/image';
import { ButtonDefault } from '@/components/button/button.styles';

export const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 40px 20px;
`

export const HomePageAboutMeContainer = styled.div`
  @keyframes ShowUp {
    from {
      opacity: 0;
    } to {
        opacity: 1;
      }
  }
  
  border-radius: 10px;
  width: 50vw;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  animation: 1s ease-out 0.7s 1 backwards ShowUp;
`

export const HomePageText = styled.p`
  font-size: 30px;
  font-weight: bold;
  color: #fff;
  transition: 1s ease-in-out;
  text-align: center;
  &:hover {
    color: #2DE956;
    
  }
`

export const HomePageAboutMeImage = styled(Image)`
`

export const HomePageAdditionalInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 80vw;
  gap: 40px 20px;
`

export const HomePageAdditionalInfoProjects = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid #2DE956;
  border-radius: 10px;
  width: 30vw;
  justify-content: space-between;
  align-items: flex-end;
  padding: 40px 20px;
`

export const HomePageAdditionInfoContacts = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid #2DE956;
  border-radius: 10px;
  width: 50vw;
  justify-content: space-between;
`

export const HomePageLink = styled(ButtonDefault)`
  padding: 10px 20px;
  height: 40px;
`

export const HomePageTextAdditional = styled(HomePageText)`
  text-align: start;
`