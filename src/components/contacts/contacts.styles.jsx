import styled from 'styled-components'
import Image from 'next/image';
import Link from 'next/link';

export const ContactsContainer = styled.div`
  @keyframes ShowContacts {
    from {
      opacity: 0;
    } to {
        opacity: 1;
      }
  }
 display: flex;
  flex-direction: row;
  gap: 30px;
  animation: 1s ease-out .5s 1 backwards ShowContacts;
`

export const ContactImage = styled(Image)`
  border-radius: 50%;
  transition: 0.3s ease-in-out;
  width: 60px;
  height: 60px;
  &:hover {
    width: 80px;
    height: 80px;
  }
`

export const ContactLink = styled(Link)`
  
`
