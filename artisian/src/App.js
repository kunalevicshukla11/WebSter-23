import './App.css';
import { Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import Landing from './pages/Landing';
import Register from './pages/Register';
import Login from './pages/Login';
import axios from 'axios'
import { Toaster, toaster } from 'react-hot-toast'
import { UserContextProvider } from './context/userContext';
import Dashboard from './pages/Dashboard';

axios.defaults.baseURL = 'http://localhost:8000'
axios.defaults.withCredentials = true


function App() {
  return (
    <UserContextProvider>
      <Navbar />
      <Toaster position='bottom-right' toastOptions={{ duration: 2000 }} />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard/>} />
      </Routes>
    </UserContextProvider>

  );
}

export default App;
