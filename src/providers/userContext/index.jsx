import { createContext, useState } from "react";

export const userContext = createContext() 

export const UserProvider = ({children}) => {
    const [token, setToken] = useState(localStorage.getItem("@KenzieHub:Token") || null)
    const [userId, setUserId] = useState(localStorage.getItem("@KenzieHub:UserId" || null))

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