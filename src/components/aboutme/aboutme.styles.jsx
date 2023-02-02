import styled from "styled-components";


export const AboutMeContainer = styled.div`
  @keyframes ShowUp {
    from {
      opacity: 0;
    } to {
        opacity: 1;
      }
  }
  
  border: 1px solid #2DE956;
  border-radius: 10px;
  width: 70vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
  animation: 1s ease-out 1s 1 backwards ShowUp;
`

export const AboutMeText = styled.p`
  font-size: 30px;
  font-weight: bold;
  color: #fff;
`