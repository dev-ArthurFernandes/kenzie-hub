import { useContext, useEffect, useState } from "react";
import { NavBar } from "../../components/NavBar";
import { userContext } from "../../providers/userContext";
import { StyledHeader } from "../../styles/HeaderStyle.js";
import { Main } from "../../styles/Main.js";
import { Button } from "../../components/Buttons"
import { FaPlus, FaRegFilePowerpoint } from "react-icons/fa"
import { Loading } from "../../components/Loading";
import { Container } from "../../styles/Container";
import { Tecnologias } from "../../components/Tecnologias";
import { Tecnologia } from "../../components/Tecnologia";
import { Modal } from "../../components/Modal"
import { Toast } from "../../components/MyToast";
import { useNavigate } from "react-router-dom";
import { BsFileEarmarkSpreadsheet } from "react-icons/bs";
import { api } from "../../services/api.js";
import { techContext } from "../../providers/techContext";

export const DashBord = () => {

  const {user, loading, notify, message, setLoading, setUser} = useContext(userContext);
  const { setTech, Tech, setAllState } = useContext(techContext)

  const [modalCreate, setModalCreate] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);
  function openModalCreate(){
    setModalCreate(true)
  }

  function openModalEdit(){
    setModalEdit(true)
  }

  const navigate = useNavigate()
  
  useEffect(() => {
    const token = localStorage.getItem("@KenzieHub:Token")
    async function authLogin(){
      try{
        const response = await api.get("/profile", {headers: {Authorization: `Bearer ${token}`}})
        localStorage.setItem("@KenzieHub:UserId", response.data.id)
        setUser(response.data)
        if(response.data.techs.length > 0){
          setTech(response.data.techs)
        }
        navigate("/dashbord")
      }catch(error){
        console.error(error)
        localStorage.clear()
        navigate("/")
      }finally{
        setLoading(false)
      }
    }
    authLogin()
    setAllState(token)

  }, []);
  console.log(Tech)

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
                Tech.length > 0 ? Tech.map((element) => {
                  return <Tecnologia title={element.title} level={element.status} callback={openModalEdit} id={element.id} key={element.id}/> 
                }) : <h2>Você ainda não tem tecnologias cadastradas...</h2>
              }
            </Tecnologias>
          </Container>
          {
            modalCreate && <Modal setModal={setModalCreate} type={"create"}/>
          }
          {
            modalEdit && <Modal setModal={setModalEdit} type={"edit"}/>
          }
          {
            notify && <Toast text={message.text} type={message.type}/>
          }
        </Main>
        </>
      }
    </>
  )
}