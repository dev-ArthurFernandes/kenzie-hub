import { NavBar } from "../../components/NavBar"
import { StyledHeader } from "../../styles/HeaderStyle.js"
import { Main } from "../../styles/Main.js"

export const DashBord = () => {
  return (
    <>
      <NavBar />
      <Main>
        <StyledHeader>
          {/* <h2>Olá,{user.name}</h2> */}
          {/* <p>{user.course_module}</p> */}
        </StyledHeader>
        <h2>Que pena! Estamos em desenvolvimento:(</h2>
        <p>Nossa aplicação está em desenvolvimento, em breve teremos novidades</p>
      </Main>
    </>
  )
}