import { MainRoutes } from "./routes";
import {useEffect, useContext} from "react"
import { userContext } from "./providers/userContext";
import { useNavigate} from "react-router-dom"
import { api } from "./services/api";

function App() {
  const navigate = useNavigate()
  const {setUser, setLoading, token, setToken} = useContext(userContext)
  useEffect(() => {
    async function authLogin(){
      try{
        const response = await api.get("/profile", {headers: {Authorization: `Bearer ${token}`}})
        localStorage.setItem("@KenzieHub:UserId", response.data.id)
        localStorage.setItem("@KenzieHub:Token", response.data.token)
        setToken(response.data.token)
        setUser(response.data)
        navigate("/dashbord")
      }catch(error){
        console.log(error)
        localStorage.clear()
        navigate("/")
      }finally{
        setLoading(false)
      }
    }
    authLogin()
  }, []);

  return (
    <MainRoutes/>
  );
}

export default App;
