import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Navbar from './assets/components/Navbar';
import Home from './assets/components/Home';
import About from './assets/components/About';
import Posts from './assets/components/Post';

function App() {


  return (
    <>
       <BrowserRouter>
    
     <Navbar/>
      <Routes>
       
     
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
          <Route path="/posts" element={<Posts/>} />
      
       
      
     
        
       
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
