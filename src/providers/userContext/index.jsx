import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import { api } from "../../services/api.js";

export const userContext = createContext() 

export const UserProvider = ({children}) => {
  const [token, setToken] = useState(localStorage.getItem("@KenzieHub:Token") || null)
  const [userId, setUserId] = useState(localStorage.getItem("@KenzieHub:UserId" || null))

  const [user, setUser] = useState(null)

  const [Tech, setTech] = useState(null)

  const [notify, setNotify] = useState(null)
  const [message, setMessage] = useState({})
  const [loading, setLoading] = useState(true)

    return (
      <userContext.Provider value={{token, user, notify, message, setMessage, setNotify, setToken, setLoading, loading, setUser, setUserId, userId, Tech, setTech}}>
        {children}
      </userContext.Provider>
    )
}