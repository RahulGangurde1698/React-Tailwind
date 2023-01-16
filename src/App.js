
import './App.css';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
import Navbar from './components/Navbar';
import About from './components/About';
import Footer from './components/Footer';
import Profile from './components/Profile';


function App() {
  return (
    < >

      <BrowserRouter>
    <Navbar/>
    <Routes>
   <Route path='/' element={<Homepage/>} /> 
     <Route path='/about' element={<About/>} />  
     <Route path='/profile' element={<Profile/>} />  

    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
