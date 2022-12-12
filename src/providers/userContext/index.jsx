import { createContext, useState, useEffect } from "react";

export const userContext = createContext() 

export const UserProvider = ({children}) => {
    const [token, setToken] = useState(localStorage.getItem("@KenzieHub:Token") || null)

    const [user, setUser] = useState(null)

    const [notify, setNotify] = useState(null)
    const [message, setMessage] = useState({})
    const [loading, setLoading] = useState(true)


    useEffect(() => {

        const response = async () => {
          try {
            const resp = await api.get('/profile', { headers: { "Authorization": `Bearer ${token}` } })
            setUser(resp.data)
          } catch (error) {
            console.error(error)
          }
        }

        if(token){
            response()
        }
    }, []);

    return (
      <userContext.Provider value={{token, user, notify, message, setMessage, setNotify, setToken}}>
        {children}
      </userContext.Provider>
    )
}