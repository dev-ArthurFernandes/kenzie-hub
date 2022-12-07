import { LoginForm } from "../../components/LoginForm";
import { Logo } from "../../components/Logo";
import { Toast } from "../../components/MyToast";
import { Main } from "../../styles/Main.js";
import { useState } from "react"

export const Login = () => {
  const [notify, setNotify] = useState(null); 
  const [message, setMessage] = useState({});
  console.log(message)
  console.log(notify)
  return (
    <>
      <Main>
        <Logo />
        <LoginForm setNotify={setNotify} setMessage={setMessage}/>
        {notify && <Toast type={message.type} text={message.text}/>}
      </Main>
    </>
  );
};
