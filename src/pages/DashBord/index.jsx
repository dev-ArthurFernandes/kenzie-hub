import { useContext, useEffect, useState } from "react";
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
import { Modal } from "../../components/Modal"

export const DashBord = () => {

  const {user, loading, Tech} = useContext(userContext);

  const [modalCreate, setModalCreate] = useState(false);

  function openModalCreate(){
    setModalCreate(true)
  }

  function openModalEdit(){
    setModalEdit(true)
  }

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
              <Button style={"Text"} callback={openModalCreate}><FaPlus/></Button>
            </div>
            <Tecnologias>
              {
                Tech > 0 ? Tech.map((element) => {
                  <Tecnologia title={element.title} level={element.status} callback={openModalEdit}/> 
                }) : <h2>Você ainda não tem tecnologias cadastradas...</h2>
              }
            </Tecnologias>
          </Container>
          {
            modalCreate && <Modal setModal={setModalCreate} type={"create"}></Modal>
          }
        </Main>
        </>
      }
    </>
  )
}