import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  height: 118px;

  display: flex;

  align-items: center;
  justify-content: space-around;

  border: 1px solid var(--color-grey-3);

  position: fixed;
  top: 100px;

  & p{
    color: var(--color-grey-1);

    font-weight: 400;
    font-size: 12pt;
    line-height: 22px;
  }

  & h2{
    font-weight: 700;
  font-size: 18pt;
  line-height: 28px;
  }
`