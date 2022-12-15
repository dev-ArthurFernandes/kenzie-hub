import { StyledLink } from "./style.js";

export const Link = ({ link, text, style, callback }) => {
  return (
    <>
      <StyledLink to={link} className={style} onClick={() => callback()}>{text}</StyledLink>
    </>
  );
};
