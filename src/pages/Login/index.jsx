import { useContext } from "react";
import { LoginForm } from "../../components/LoginForm";
import { Logo } from "../../components/Logo";
import { Toast } from "../../components/MyToast";
import { userContext } from "../../providers/userContext";
import { Main } from "../../styles/Main.js";
import { Loading } from "../../components/Loading";

export const Login = () => {
  const {loading, notify, message} = useContext(userContext);
  
  return (
    <>
    {
      loading ? <Loading/> : 
      <Main>
        <Logo />
        <LoginForm />
        {notify && <Toast type={message.type} text={message.text}/>}
      </Main>
    }
    </>
  );
};
