import styled from 'styled-components';

export const StyledModalSection = styled.section`
  width: 100vw;
  height: 100vh;

  display: flex;

  justify-content: center;
  align-items: center;

  position: absolute;

  top: 0;

  background-color: rgba(0,0,0,0.52);
`


export const StyledModal = styled.div`
  width: 100%;
  max-width: 369px;

  height: 342px;

  display: flex;
  flex-direction: column;

  gap: 24px;

  background-color: var(--color-grey-3);

  

  & header{
    width: 100%;

    min-height: 50px;

    background-color: var(--color-grey-2);

    position: relative;

    color: var(--color-grey-0);

    display: flex; 

    align-items: center;
    justify-content: space-between;

    padding: 10px;

    &> button{
    width: fit-content;
    height: fit-content;

    border: none;

    background-color: transparent;

    cursor: pointer;
    }

    & h2{
      font-weight: 700;
      font-size: 14pt;
      line-height: 24px;
    }
  }

  & > div{
    height: 100%;

    padding: 0 10px 30px 10px;

    display: flex;
    flex-direction: column;

    justify-content: space-between;
    align-items: center;


  }
`