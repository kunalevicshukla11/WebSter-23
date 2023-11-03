import './App.css';
import { Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import Landing from './pages/Landing';
import Register from './pages/Register';
import Login from './pages/Login';
import axios from 'axios'
import { Toaster, toaster } from 'react-hot-toast'


axios.defaults.baseURL = 'http://localhost:8000'
axios.defaults.withCredentials = true


function App() {
  return (
    <>
      <Navbar />
      <Toaster position='bottom-right' toastOptions={{ duration: 2000 }} />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </>

  );
}

export default App;
