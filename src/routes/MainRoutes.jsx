import {Route, Routes } from "react-router-dom";
import {Login} from "../pages/Login";
import {Register} from "../pages/Register"
import {DashBord} from "../pages/DashBord"

export const MainRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/register" element={<Register/>}/>
            <Route path="/DashBord" element={<DashBord/>}/>
        </Routes>
    )

}