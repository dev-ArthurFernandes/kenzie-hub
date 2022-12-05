import styled from "styled-components";

export const Container = styled.div`
  width: 60%;

  display: flex;
  justify-content: space-between;
  
  @media (max-width: 600px) {
    width: 90%;
  }
`;
