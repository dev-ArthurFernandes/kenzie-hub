import { Link as Ancora } from "react-router-dom";
import { StyledLink } from "./style";

export const Link = ({ link, text, style }) => {
  return (
    <>
      <StyledLink to={link} className={style}>{text}</StyledLink>
    </>
  );
};
