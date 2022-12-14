import styled from "styled-components";

export const StyledInput = styled.div`
  width: 100%;
  height: 48px;

  display: flex;
  flex-direction: column;

  /* margin: 10px; */

  & input {
    width: 100%;
    min-height: 48px;

    border: none;
    border-radius: 4px;

    background: var(--color-grey-2);

    outline: none;

    padding: 10px;

    font-weight: 400;
    font-size: 16.2426px;
    line-height: 26px;

    color: var(--color-grey-0);

    &::placeholder {
      color: var(--color-grey-1);
    }

    &:focus {
      &::placeholder {
        color: var(--color-grey-0);
      }
    }

  }
`;
