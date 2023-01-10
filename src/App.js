import './style.scss'
import Login from './pages/Login'
import RegisterForm from './pages/RegisterForm';
import Home from './pages/Home';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { useContext } from 'react';
import {AuthContext } from "./context/AuthContext"





function App() {
  const {currentUser} = useContext(AuthContext)
  console.log(currentUser);
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/">
        <Route index element={<Home/>} />
        <Route path="login" element={<Login/>} />
        <Route path="register" element={<RegisterForm/>} />
</Route>
      </Routes>
    </BrowserRouter>
 
  );
}

export default App;
