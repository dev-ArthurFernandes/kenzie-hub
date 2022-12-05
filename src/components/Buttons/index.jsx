import { StyledButton } from "./style";

export const Button = ({ style, children, callback }) => {
  return (
    <>
      <StyledButton className={style} onClick={() => callback()}>
        {children}
      </StyledButton>
    </>
  );
};
