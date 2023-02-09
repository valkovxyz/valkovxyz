import styled from 'styled-components';

export const HeaderStyled = styled.header`
  @keyframes ShowUp {
    from {
      opacity: 0;
    } to {
        opacity: 1;
      }
  }
  
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  width: 100vw;
  padding: 20px 40px;
  animation: 1s ease-out 1s 1 backwards ShowUp;
`