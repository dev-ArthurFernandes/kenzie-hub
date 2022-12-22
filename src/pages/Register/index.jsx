import { NavBar } from "../../components/NavBar";
import { Main } from "../../styles/Main.js";
import { RegisterForm } from "../../components/RegisterForm";
import { Toast } from "../../components/MyToast"
import { useContext, useEffect} from "react"
import { userContext } from "../../providers/userContext";
import { Loading } from "../../components/Loading";
import { useNavigate } from "react-router-dom";
import { api } from '../../services/api.js';
import { techContext } from "../../providers/techContext";


export const Register = () => {

  const {loading, setLoading, notify, setUser, message} = useContext(userContext)
  const {setTech} = useContext(techContext)

  const navigate = useNavigate()
  
  useEffect(() => {
    async function authLogin(){
      try{
        const token = localStorage.getItem("@KenzieHub:Token")
        const response = await api.get("/profile", {headers: {Authorization: `Bearer ${token}`}})
        localStorage.setItem("@KenzieHub:UserId", response.data.id)
        setUser(response.data)
        if(response.data.techs.length > 0){
          setTech(response.data.techs)
        }
        navigate("/dashbord")
      }catch(error){
        console.error(error)
        localStorage.clear()
        navigate("/")
      }finally{
        setLoading(false)
      }
    }
    authLogin()
  }, []);

  return (
    <>
    {loading ? <Loading/> : 
    <Main>
      <NavBar />
      <RegisterForm />
      {notify && <Toast type={message.type.toLowerCase()} text={message.text}/>}
    </Main>}
    </>
  );
};
