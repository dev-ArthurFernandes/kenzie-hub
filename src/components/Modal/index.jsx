import { StyledModal, StyledModalSection } from "./style";
import { Input } from '../../components/Inputs';
import { CgClose } from 'react-icons/cg';
import { Select } from "../../components/Selects"
import { Button } from "../Buttons";


export const Modal = ({text,children, type, setModal}) => {

  return(
    <StyledModalSection>
      <StyledModal>
        <header>
          {type == 'create' && <h2>Criar Tecnologia</h2>}
          {type == 'edit' && <h2>Editar Tecnologia</h2>}
          <button onClick={() => setModal(false)}><CgClose style={{width: "20px", height: "20px", color: "white"}}/></button>
        </header>
        {
          type == 'create' && 
          <div>
            <Input text={"Nome"} placeholder={"Digite o nome da Tecnologia"}/>
            <Select text={"Status"}>
              <option>Iniciante</option>
              <option>Intermediário</option>
              <option>Avançado</option>
            </Select>
            <Button style={'Primary Cem'}>Cadastrar Tecnologia</Button>
          </div>
        }
      </StyledModal>
    </StyledModalSection>
  )
}