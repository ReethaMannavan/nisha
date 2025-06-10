import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Login from './assets/components/Login';
import Register from './assets/components/Register';
import Home from './assets/components/Home';



function App() {


  return (
    <>
    <BrowserRouter>
    
    
      <Routes>
       
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<Navigate to="/" />} />
      
       
      </Routes>
      </BrowserRouter>

      
    </>
  )
}

export default App
