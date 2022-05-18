import React, { useState } from 'react';
import './App.css';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Sidebar from './components/Sidebar';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignIn from './components/pages/SignIn';

function App() {

  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)

  return (
    <BrowserRouter>
      <Navbar handleClick={handleClick} click={click}/>
      <Sidebar click={click}/>
      <Routes>
        <Route path='/Travel-agency/' exact element={<Home />} />
        <Route path='/Travel-agency/services' exact element={<Services />} />
        <Route path='/Travel-agency/products' exact element={<Products />} />
        <Route path='/Travel-agency/sign-up' exact element={<SignIn />} />
        <Route path='/Travel-agency/trip' exact element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
