import "./App.css";
import { Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import RegisterUser from "./pages/User/Register";
import LoginUser from "./pages/User/Login";
import RegisterAdmin from "./pages/Admin/Register";
import LoginAdmin from "./pages/Admin/Login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signup-student" element={<RegisterUser />} />
        <Route path="/login-student" element={<LoginUser />} />
        <Route path="/signup-admin" element={<RegisterAdmin />} />
        <Route path="/login-admin" element={<LoginAdmin />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
