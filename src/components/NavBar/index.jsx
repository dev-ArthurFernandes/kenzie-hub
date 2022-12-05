import { Container } from "../../styles/Container.js";
import { Logo } from "../Logo";
import { StyledNavBar } from "./style.js";
import { Link } from "../Links";

export const NavBar = () => {
  function Return() {
    console.log("Saindo...");
  }

  return (
    <StyledNavBar>
      <Container>
        <Logo />
        <Link link={'/'} text={"Sair"} style={'Cem'} />
      </Container>
    </StyledNavBar>
  );
};
