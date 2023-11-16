import "./App.css";
import { Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import RegisterUser from "./pages/User/Register";
import LoginUser from "./pages/User/Login";
import RegisterAdmin from "./pages/Admin/Register";
import LoginAdmin from "./pages/Admin/Login";
import Tandon from "./Hostels/Tandon";
import Tilak from "./Hostels/Tilak";
import Malviya from "./Hostels/Malviya";
import Patel from "./Hostels/Patel";
import NotFound from "./components/NotFound";
import Contact from "./pages/Contact";
import Complaint from "./pages/Complaint";
import Messmenu from "./pages/Messmenu";
import Profile from "./pages/Profile";
import RegisterComplaint from "./pages/RegisterComplaint";

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
        <Route path="/dashboard/tandon" element={<Tandon />} />
        <Route path="/dashboard/tilak" element={<Tilak />} />
        <Route path="/dashboard/malviya" element={<Malviya />} />
        <Route path="/dashboard/patel" element={<Patel />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/sigle-complaint/:compID" element={<Complaint />} />
        <Route path="/mess-menu" element={<Messmenu />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/new-complaint" element={<RegisterComplaint />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
