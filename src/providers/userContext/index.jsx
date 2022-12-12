import { createContext, useState, useEffect } from "react";
import { useNavigate} from "react-router-dom"
import { api } from "./services/api";

export const userContext = createContext() 

export const UserProvider = ({children}) => {
    const [token, setToken] = useState(localStorage.getItem("@KenzieHub:Token") || null)
    const [userId, setUserId] = useState(localStorage.getItem("@KenzieHub:UserId" || null))

    const [user, setUser] = useState(null)

    const [notify, setNotify] = useState(null)
    const [message, setMessage] = useState({})
    const [loading, setLoading] = useState(true)

    const navigate = useNavigate()
  
  useEffect(() => {
    async function authLogin(){
      try{
        const response = await api.get("/profile", {headers: {Authorization: `Bearer ${token}`}})
        localStorage.setItem("@KenzieHub:UserId", response.data.id)
        localStorage.setItem("@KenzieHub:Token", response.data.token)
        setToken(response.data.token)
        setUser(response.data)
        navigate("/dashbord")
      }catch(error){
        console.log(error)
        localStorage.clear()
        navigate("/")
      }finally{
        setLoading(false)
      }
    }
    authLogin()
  }, []);

    return (
      <userContext.Provider value={{token, user, notify, message, setMessage, setNotify, setToken, setLoading, loading, setUser, setUserId, userId}}>
        {children}
      </userContext.Provider>
    )
}