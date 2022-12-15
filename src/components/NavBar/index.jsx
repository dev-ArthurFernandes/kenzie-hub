import { Container } from "../../styles/Container.js";
import { Logo } from "../Logo";
import { StyledNavBar } from "./style.js";
import { Link } from "../Links";

export const NavBar = () => {
  function Return() {
    localStorage.clear()
  }

  return (
    <StyledNavBar>
      <Container>
        <Logo />
        <Link link={'/'} text={"Sair"} style={'Cem'} callback={Return}/>
      </Container>
    </StyledNavBar>
  );
};
