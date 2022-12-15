import { StyledModal, StyledModalSection } from "./style";
import { Input } from '../../components/Inputs';
import { CgClose } from 'react-icons/cg';
import { Select } from "../../components/Selects"
import { Button } from "../Buttons";
import { useForm } from "react-hook-form";
import { api } from '../../services/api.js'
import { userContext } from "../../providers/userContext";
import { useContext } from "react";
import * as yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup";


export const Modal = ({type, setModal, id}) => {

  const {setMessage, setNotify, token, setTech} = useContext(userContext)

  const formShape = yup.object().shape({
    title: yup.string(),
    status: yup.string()
  })

  const {register, handleSubmit} = useForm({
    resolver: yupResolver(formShape)
  })

  async function submitCreate(data){
    if(type == 'create'){
      try{
        await api.post("/users/techs", data, {headers: {Authorization: `Bearer ${token}`}}).then(resp => {
          return resp.data
        }).then(resp => {
          setMessage({text: 'Tecnologia criada com sucesso!', type: 'success'})
          setNotify(true)
          setTimeout(() => setNotify(false), 3000)
          setTech((old) => {
            if(old){
              setTech([...old, resp])
            }else{
              setTech([resp])
            }
          })
          setModal(false)
        })
      }catch(error){
        console.error(error);
      }
    }else if(type == 'edit'){
      try {
        await api.put(`/user/techs/${id}`, data)
        setMessage({text: 'Tecnologia atualizada com sucesso!', type: 'success'})
        setNotify(true)
        setTimeout(() => setNotify(false), 3000)
        setModal(false)
      } catch (error) {
        console.error(error)
        setMessage({text: "Olha a me", type: 'success'})
        setNotify(true)
        setTimeout(() => setNotify(false), 3000)
      }
    }
  }


  return(
    <StyledModalSection>
      <StyledModal>
        <header>
          {type == 'create' && <h2>Criar Tecnologia</h2>}
          {type == 'edit' && <h2>Editar Tecnologia</h2>}
          <button onClick={() => setModal(false)}><CgClose style={{width: "20px", height: "20px", color: "white"}}/></button>
        </header>
        <form onSubmit={handleSubmit(submitCreate)}>
          <Input text={"Nome"} placeholder={"Digite o nome da Tecnologia"} register={register('title')}/>
          <Select text={"Status"} register={register('status')}>
            <option>Iniciante</option>
            <option>Intermediário</option>
            <option>Avançado</option>
          </Select>
          <Button style={'Primary Cem'} type={'submit'} callback={() => false}>
          {type == 'create' && "Cadastrar Tecnologia"}
          {type == 'edit' && "Salvar alteração"}
          </Button>
        </form>
      </StyledModal>
    </StyledModalSection>
  )
}