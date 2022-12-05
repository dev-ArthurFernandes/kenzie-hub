import { Link } from ".";
import styled from "styled-components";

export const StyledLink = styled(Link)`
  width: 100%;
  height: 48px;

  background: var(--color-grey-2);

  border: 1.2182px solid var(--color-grey-2);
  border-radius: 4px;

  padding: 20px;

  color: var(--color-grey-0);

  display: flex;

  justify-content: center;
  align-items: center;

  &:hover {
    background: var(--color-grey-1);
    border: 1.2182px solid var(--color-grey-1);
  }

  &.Cem{
    width: fit-content;
  }
`;
