import { Routes, Route } from "react-router-dom";
import { DashBord } from "./pages/DashBord";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="/dashbord" element={<DashBord />} />
    </Routes>
  );
}

export default App;
