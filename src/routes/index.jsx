import {Route, Routes } from "react-router-dom";
import {Login} from "../pages/Login";
import {Register} from "../pages/Register";
import {DashBord} from "../pages/DashBord";


export const MainRoutes = () => {
    return(
        <Routes>
            <Route exact path="/" element={<Login/>} />
            <Route path="/register" element={<Register/>}/>
            <Route path="/dashbord" element={<DashBord/>}/>
        </Routes>
    )
}