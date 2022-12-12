import { createContext, useContext, useState } from "react";
import { userContext } from "../userContext";


export const TechContext = createContext()

export const TechProvider = ({children}) => {

    const {user} = useContext(userContext);

    const [Tech, setTech] = useState(user.tech)

    

    return(
        <TechContext.Provider>
            {children}
        </TechContext.Provider>
    )
}