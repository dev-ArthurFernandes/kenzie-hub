import { NavBar } from "../../components/NavBar";
import { Main } from "../../styles/Main.js";
import { RegisterForm } from "../../components/RegisterForm";
import { Toast } from "../../components/MyToast"
import { useContext} from "react"
import { userContext } from "../../providers/userContext";
import { Loading } from "../../components/Loading";


export const Register = () => {

  const {loading} = useContext(userContext)

  return (
    <>

    {loading ? <Loading/> : 
    <Main>
      <NavBar />
      <RegisterForm />
      {/* {notify && <Toast type={message.type.toLowerCase()} text={message.text}/>} */}
    </Main>}
    </>
  );
};
