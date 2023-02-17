import styled from 'styled-components';

export const FooterStyled = styled.footer`
  @keyframes ShowUp {
    from {
      opacity: 0;
    } to {
        opacity: 1;
      }
  }
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;

  animation: 1s ease-out 1.9s 1 backwards ShowUp;
  p {
    color: #575757;
    font-weight: bold;
  }
`
