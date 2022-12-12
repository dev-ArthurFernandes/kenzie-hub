import { UserProvider } from "./userContext"

export const Provider = ({children}) => {
    return <UserProvider>{children}</UserProvider>
}