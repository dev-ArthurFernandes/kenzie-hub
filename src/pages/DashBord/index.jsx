import { useContext, useEffect } from "react";
import { NavBar } from "../../components/NavBar";
import { userContext } from "../../providers/userContext";
import { StyledHeader } from "../../styles/HeaderStyle.js";
import { Main } from "../../styles/Main.js";
import {Button} from "../../components/Buttons"
import {FaPlus} from "react-icons/fa"
import { Loading } from "../../components/Loading";
import { Container } from "../../styles/Container";
import { Tecnologias } from "../../components/Tecnologias";
import { Tecnologia } from "../../components/Tecnologia";
import { useState } from "react";

export const DashBord = () => {

  const {user, loading} = useContext(userContext);

  const [userTech, setUserTech] = useState(user.techs)
  return (
    <>
      {loading ? <Loading/> : 
        <>
        <NavBar />
        <StyledHeader>
          <h2>Olá, {user.name}</h2>
          <p>{user.course_module}</p>
        </StyledHeader>
        <Main>
          <Container style={{flexDirection: "column"}}>
            <div style={{width: "100%", display: "flex", justifyContent: "space-between", marginTop: "100px"}}>
              <h2>Tecnologias</h2>
              <Button style={"Text"}><FaPlus/></Button>
            </div>
            <Tecnologias>
              {
                userTech ? userTech.map((tech) => {
                  <Tecnologia title={tech.title} level={tech.status}/>
                }) : <h2>Você ainda não possui Tecnologias cadastradas...</h2>
              }
            </Tecnologias>
          </Container>
        </Main>
        </>
      }
    </>
  )
}