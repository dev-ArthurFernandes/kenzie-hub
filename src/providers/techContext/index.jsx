import { createContext, useState } from "react";
import { api } from "../../services/api";

export const techContext = createContext()

export const TechProvider = ({children}) => {

  const [Tech, setTech] = useState(null)

  async function setAllState(token){
    try{
      const response = await api.get("/profile", {headers: {Authorization: `Bearer ${token}`}})
      console.log(response)
      setTech(response.data.techs)
    }catch(error){
      console.error(error)
    }
    console.log('ola')
  }

  return(
    <techContext.Provider value={{Tech, setTech, setAllState}}>
      {children}
    </techContext.Provider>
  )
}