import { NavBar } from "../../components/NavBar";
import { Main } from "../../styles/Main.js";
import { RegisterForm } from "../../components/RegisterForm";
import { Toast } from "../../components/MyToast"

export const Register = () => {

  
  return (
    <Main>
      <NavBar />
      <RegisterForm />
      {/* {notify && <Toast type={message.type.toLowerCase()} text={message.text}/>} */}
    </Main>
  );
};
