import { StyledTecnologiCard } from "./style";
import { FaRegTrashAlt } from "react-icons/fa";
import { api } from "../../services/api.js";
import { useContext } from "react";
import { userContext } from "../../providers/userContext";


export const Tecnologia = ({title, level, callback, id}) => {
    
    const {token, setMessage, setNotify, setTech} = useContext(userContext)

    async function deletTech(){
        try{
            await api.delete(`/users/techs/${id}`, {headers: {Authorization: `Bearer ${token}`}}).then(resp => {
                setMessage({text: "Tecnologia excluida com sucesso!", type:"success"})
                setNotify(true)
                setTimeout(() => setNotify(false), 3000)
                setTech((old) => {
                    setTech(old.filter(element => element.id !== id))
                })
            })
        }catch(error){
            console.error(error);
        }
    }

    function modalAction(event){
        if(event.target.className === 'DivModal'){
            callback(id)
        }
        if(event.target.className === "Trash" || event.target.className.baseVal === "Trash"){
            deletTech()
        }
    }
    
    return(
        <StyledTecnologiCard onClick={modalAction} className="DivModal">
            <div className="DivModal">
                <h2 className="DivModal">{title}</h2>
                <p className="DivModal">{level}</p>
            </div>
            <button className="Trash" onClick={modalAction}>
                <FaRegTrashAlt style={{color: "#fff"}} className="Trash"/>
            </button>
        </StyledTecnologiCard>
    )
}