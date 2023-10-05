import React from 'react'
import Home from "./pages/home";
import Login from "./pages/login"
import Register from "./pages/register"
import AboutPage from "./pages/about"

import {
    Routes,
    Route,
    Link
  } from "react-router-dom";


function App() {
  return (
    
        <>
            <Routes>
              <Route exact path="/" element={<Home/>}/>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/about" element={<AboutPage />} />
            </Routes>
       </>



  );
}

export default App;
