import { NavBar } from "../../components/NavBar";
import { Main } from "../../styles/Main.js";
import { RegisterForm } from "../../components/RegisterForm";
import { Toast } from "../../components/MyToast"
import { useState } from "react";

export const Register = () => {
  const [notify, setNotify] = useState(null); 
  const [message, setMessage] = useState({});
  
  return (
    <Main>
      <NavBar />
      <RegisterForm setnotify={setNotify} setmessage={setMessage}/>
      {notify && <Toast type={message.type.toLowerCase()} text={message.text}/>}
    </Main>
  );
};
