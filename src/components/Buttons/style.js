import styled from "styled-components";

export const StyledButton = styled.button`
  width: fit-content;
  height: 48px;

  border-radius: 4px;

  padding: 22px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-weight: 500;
  font-size: 16px;
  line-height: 26px;
  color: var(--color-grey-0);

  cursor: pointer;

  &.Primary {
    border: 1px solid var(--color-primary);
    background: var(--color-primary);
  }

  &.Primary:hover {
    background: var(--color-primary-Focus);
  }

  &.Primary.Negative {
    border: 1px solid var(--color-primary-Negative);
    background: var(--color-primary-Negative);
    cursor: default;
  }

  &.Secondary {
    border: 1px solid var(--color-grey-1);
    background: var(--color-grey-1);
  }

  &.Secondary.Negative {
    border: 1px solid var(--color-grey-2);
    background: var(--color-grey-2);
    cursor: default;
  }

  &.Text {
    border: 1px solid var(--color-grey-3);
    background: var(--color-grey-3);
    cursor: pointer;
  }

  &.Text:hover {
    border: 1px solid var(--color-grey-2);
    background: var(--color-grey-2);
  }

  &.Cem {
    width: 100%;
  }
`;
