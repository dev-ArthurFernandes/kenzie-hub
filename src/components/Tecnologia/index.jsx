import { StyledTecnologiCard } from "./style"
import { FaRegTrashAlt } from "react-icons/fa"
import { Button } from "../Buttons"


export const Tecnologia = ({title, level, callback}) => {
    return(
        <StyledTecnologiCard onClick={callback}>
            <div>
                <h2>{title}</h2>
                <p>{level}</p>
            </div>
            <button className="Trash">
                <FaRegTrashAlt style={{color: "#fff"}}/>
            </button>
        </StyledTecnologiCard>
    )
}