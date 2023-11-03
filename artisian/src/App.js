import './App.css';
import { Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import Landing from './pages/Landing';
import Register from './pages/Register';
import Login from './pages/Login';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </>

  );
}

export default App;
