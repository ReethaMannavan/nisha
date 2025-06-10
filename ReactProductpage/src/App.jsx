import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'
import Home from './assets/components/Home';
import Products from './assets/components/Products';
import Contact from './assets/components/Contact';
import Navbar from './assets/components/Navbar';

function App() {


  return (
    <>
      <BrowserRouter>
     <Navbar/>
      <Routes>
     <Route path="/" element={<Home/>} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact/>} />
      
     
        
       
      </Routes>
      </BrowserRouter>
    </>
    
  )
}

export default App
