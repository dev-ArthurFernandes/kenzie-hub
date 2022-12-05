import styled from "styled-components";

export const StyledForm = styled.form`
  width: 90%;
  max-width: 369px;
  height: fit-content;
  min-height: 500px;

  padding: 22px;

  display: flex;
  flex-direction: column;

  justify-content: space-between;
  align-items: center;

  gap: 20px;

  background-color: var(--color-grey-3);

  position: relative;

  & p.Errors {
    height: 20px;

    color: var(--Negative);
  }
`;
