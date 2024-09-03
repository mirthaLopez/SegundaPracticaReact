import React from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Register from "../pages/Register";
import Login from "../pages/Login";
import About from "../pages/About";
import Home from "../pages/Home";
const Routing = () => {
    return (
        <Router>
        <Routes>
          <Route path="/Register" element={<Register />} /> 
          <Route path="/Login" element={<Login />} /> 
          <Route path="/About" element={<About />} /> 
          <Route path="/Home" element={<Home />} /> 
        </Routes>
       </Router>
    )
}

export default Routing;  