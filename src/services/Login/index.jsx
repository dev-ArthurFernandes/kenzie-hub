import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { userContext } from "../../providers/userContext"
import { api } from "../api"

export const login = async (token) => {
    const navigate = useNavigate()
    const {setUser} = useContext(userContext)
    
    await api.get("/profile", {header: {"Authentication": `Bearer ${token}`}})
    .then(resp => {
        if(resp.status === 200){
            setUser(resp.data)
            navigate("/dashbord")
        }
    })
    .catch(err => console.error(err))

}