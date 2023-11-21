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
import RegisterAccountant from "./pages/Accountant/Register";
import LoginAccountant from "./pages/Accountant/Login";

import RegisterStudentRep from "./pages/StudentRep/Register";
import LoginStudentRep from "./pages/StudentRep/Login";
import TandonExpense from "./HotelExpense/TandonExpense";
import TilakExpense from "./HotelExpense/TilakExpense";
import MalviyaExpense from "./HotelExpense/MalviyaExpense";
import PatelExpense from "./HotelExpense/PatelExpense";
import TandonMess from "./pages/MessMenu/TandonMess";
import MalviyaMess from "./pages/MessMenu/MalviyaMess";
import TilakMess from "./pages/MessMenu/TilakMess";
import PatelMess from "./pages/MessMenu/PatelMess";
import AddAndUpdateMessMenu from "./pages/AddAndUpdateMessMenu";

function App() {
  return (
    <>
      <div className="">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/signup-student" element={<RegisterUser />} />
          <Route path="/login-student" element={<LoginUser />} />

          <Route path="/signup-admin" element={<RegisterAdmin />} />
          <Route path="/login-admin" element={<LoginAdmin />} />

          <Route path="/signup-accountant" element={<RegisterAccountant />} />
          <Route path="/login-accountant" element={<LoginAccountant />} />

          <Route path="/signup-studentrep" element={<RegisterStudentRep />} />
          <Route path="/login-studentrep" element={<LoginStudentRep />} />

          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/dashboard/tandon" element={<Tandon />} />
          <Route path="/dashboard/tilak" element={<Tilak />} />
          <Route path="/dashboard/malviya" element={<Malviya />} />
          <Route path="/dashboard/patel" element={<Patel />} />

          <Route path="/mess-menu/tandon" element={<TandonMess />} />
          <Route path="/mess-menu/patel" element={<PatelMess />} />
          <Route path="/mess-menu/malviya" element={<MalviyaMess />} />
          <Route path="/mess-menu/tilak" element={<TilakMess />} />
          <Route path="/update-mess-menu" element={<AddAndUpdateMessMenu />} />

          <Route path="/dashboard/tandon/expense" element={<TandonExpense />} />
          <Route path="/dashboard/tilak/expense" element={<TilakExpense />} />
          <Route
            path="/dashboard/malviya/expense"
            element={<MalviyaExpense />}
          />
          <Route path="/dashboard/patel/expense" element={<PatelExpense />} />

          <Route path="/sigle-complaint/:compID" element={<Complaint />} />
          <Route path="/mess-menu" element={<Messmenu />} />
          <Route path="/new-complaint" element={<RegisterComplaint />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
