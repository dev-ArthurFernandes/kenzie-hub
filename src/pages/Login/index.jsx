import { useContext, useEffect } from "react";
import { LoginForm } from "../../components/LoginForm";
import { Logo } from "../../components/Logo";
import { Toast } from "../../components/MyToast";
import { userContext } from "../../providers/userContext";
import { Main } from "../../styles/Main.js";
import { Loading } from "../../components/Loading";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const {loading, notify, message, setLoading, setUser, setTech} = useContext(userContext);

  const navigate = useNavigate()
  
  useEffect(() => {
    async function authLogin(){
      try{
        const token = localStorage.getItem("@KenzieHub:Token")
        const response = await api.get("/profile", {headers: {Authorization: `Bearer ${token}`}})
        console.log(response)
        localStorage.setItem("@KenzieHub:UserId", response.data.id)
        setUser(response.data)
        if(response.data.techs.length > 0){
          setTech(response.data.techs)
        }
        navigate("/dashbord")
      }catch(error){
        console.log(error)
        // localStorage.clear()
        // navigate("/")
      }finally{
        setLoading(false)
      }
    }
    authLogin()
  }, []);

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
