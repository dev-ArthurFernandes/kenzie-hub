import { StyledTecnoloigDiv } from "./style"


export const Tecnologias = ({children}) => {
    return(
        <StyledTecnoloigDiv>
            <ul>
                {children}
            </ul>
        </StyledTecnoloigDiv>
    )
}