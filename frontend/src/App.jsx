import React from 'react';
import { BrowserRouter as Router, Route , Routes } from 'react-router-dom';
import MainNav from './components/navbar/MainNav';
import Footer from './components/Footer/Footer';
import Home from './components/Home/home';
import Menu from './components/Menu/menu';
import Aboutus from './components/About/Aboutus';
import Cart from './components/Cart/Cart';
// import Contact from './components/Contact/Contact';
import Loggin from './components/Login/Loggin';
// import Signup from './components/Login/Signup';
import store from './Redux/store';


function App() {
  return (
   <div>
      <Router>
        
        <MainNav/>
       
        <Routes>
          <Route path='/' element={<Home/>} />
          {/* <Route path='/contact' element={<Contact/>} /> */}
          <Route path='/cart' element={<Cart/>} />
          <Route path="/loggin" element={<Loggin/>}/>
          <Route path='/aboutus' element={<Aboutus/>} />
          <Route  path='/menu' element={<Menu/>}/>
          {/* <Route path='/signup' element={<Signup/>}/> */}
        </Routes>
  
        <Footer/>
      </Router>
   </div>
  );
}

export default App;
