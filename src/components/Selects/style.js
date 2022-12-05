import styled from "styled-components";

const StyledSelect = styled.div`
  width: 100%;
  height: 48px;

  margin: 10px;

  display: flex;
  flex-direction: column;

  & select{
    padding: 10px;

    border: none;
    border-radius: 4px;

    background: var(--color-grey-2);

    font-weight: 400;
    font-size: 16.2426px;
    line-height: 26px;

    color: var(--color-grey-0);
  }
`

export default StyledSelect