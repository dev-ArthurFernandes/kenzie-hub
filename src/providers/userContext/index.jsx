import { createContext, useContext, useState, useEffect } from "react";
import { techContext } from "../techContext";
import { api } from "../../services/api";


export const userContext = createContext() 

export const UserProvider = ({children}) => {
  const [token, setToken] = useState(localStorage.getItem("@KenzieHub:Token") || null)
  const [userId, setUserId] = useState(localStorage.getItem("@KenzieHub:UserId" || null))

  const {setTech} = useContext(techContext)

  const [user, setUser] = useState(null)

  const [notify, setNotify] = useState(null)
  const [message, setMessage] = useState({})
  const [loading, setLoading] = useState(true)

  return (
    <userContext.Provider value={{token, user, notify, message, setMessage, setNotify, setToken, setLoading, loading, setUser, setUserId, userId}}>
      {children}
    </userContext.Provider>
  )
}