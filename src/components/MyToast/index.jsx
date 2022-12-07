import { StyledToast } from "./style"
import { BsCheckCircle, BsXCircle, BsExclamationOctagon } from 'react-icons/bs'

export const Toast = ({type, text}) => {
    return(
        <StyledToast>
            {type === 'success' && <BsCheckCircle style={{width: "50px", height: "30px", color: "green"}}/>}
            {type === 'error' && <BsXCircle style={{width: "50px", height: "30px", color: "red"}}/>}
            {type === 'atention' && <BsExclamationOctagon style={{width: "50px", height: "30px", color: "orange"}}/>}
            <p>{text}</p>
        </StyledToast>
    )
}