import { StyledLink } from "./style.js";

export const Link = ({ link, text, style }) => {
  return (
    <>
      <StyledLink to={link} className={style}>{text}</StyledLink>
    </>
  );
};
