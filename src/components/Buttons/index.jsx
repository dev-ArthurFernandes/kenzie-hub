import { StyledButton } from "./style.js";

export const Button = ({ style, children, callback, type }) => {
  return (
    <>
      <StyledButton className={style} onClick={() => callback()} type={type}>
        {children}
      </StyledButton>
    </>
  );
};
