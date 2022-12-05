import styled from "styled-components";


export const StyledErrorMensage = styled.div`
  width: 200px;

  display: flex;

  flex-direction: column;

  justify-content: center;
  align-items: center;

  gap: 10px;

  padding: 10px;

  position: absolute;

  right: -220px;
  bottom: 0;

  border: none;
  border-radius: 4px;

  background-color: var(--Negative);


  & p{
    width: 100%;
    text-align: center;
    color: var(--color-grey-0);
    padding: 10px;
  }

  @media (max-width: 850px) {
    width: fit-content;   
    flex-direction: row;
    right: 0;
    bottom: -100px;

    p{
      font-size: 1px;
    }
  }
`