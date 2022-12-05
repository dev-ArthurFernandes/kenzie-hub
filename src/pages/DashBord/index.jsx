import { useEffect, useState } from "react"
import { NavBar } from "../../components/NavBar"
import { api } from "../../services/api.js"
import { StyledHeader } from "../../styles/HeaderStyle.js"
import { Main } from "../../styles/Main.js"

export const DashBord = () => {

  const [user, setUser] = useState([])

  const token = window.localStorage.getItem("@KenzieHub:Token")
  console.log(token)

  useEffect(() => {

    return async () => {
      const response = await api.get('/profile', { headers: { "Authorization": `Bearer ${token}` } })
      setUser(response.data)
    };
  }, []);

  return (
    <>
      <NavBar />
      <Main>
        <StyledHeader>
          <h2>Olá,{user.name}</h2>
          <p>{user.course_module}</p>
        </StyledHeader>
        <h2>Que pena! Estamos em desenvolvimento:(</h2>
        <p>Nossa aplicação está em desenvolvimento, em breve teremos novidades</p>
      </Main>
    </>
  )
}