import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Profile from "./Components/Profile";



 function App() {
  return (
    <div className="App">
     <nav className="navv">
       <ul>
         <li><Link to="/" className="ll">Home</Link></li>
         <li><Link to="/contact" className="ll">Contact</Link></li>
         <li><Link to="/About" className="ll">About</Link></li>
         <li><Link to="/Profile" className="ll">Profile</Link></li>
       </ul>
     </nav>

     <Routes>
    <Route path="/" element= {<Home/>}/>
    <Route path="/Contact" element= {<Contact/>}/>
    <Route path="/About" element= {<About/>}/>
    <Route path="/Profile" element= {<Profile/>}/>

     </Routes>

    </div>
  );
};

export default App;