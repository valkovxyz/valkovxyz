import styled from "styled-components";

export const Screen = styled.div`
  position: relative;
  height: 80vh;
  width: 100%;
  margin-right: 5.5vw;
  opacity: 0;
  animation: fade 0.4s ease-in forwards;
  background: #282828;

  @keyframes fade {
    0% {
      opacity: 0.4;
    }
    50% {
      opacity: 0.8;
    }
    100% {
      opacity: 1;
    }
  }
`;