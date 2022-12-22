import { TechProvider } from "./techContext"
import { UserProvider } from "./userContext"

export const Provider = ({children}) => {
    return(
        <TechProvider>
    <UserProvider>
            {children}
    </UserProvider>
        </TechProvider>
    )
}