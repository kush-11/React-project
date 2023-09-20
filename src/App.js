import logo from './logo.svg';
import './App.css';
import  React  from "react";
import Home from './Components/HomePage/Home';
import { Routes , Route } from 'react-router-dom';
import { Login } from './Components/LoginPage/Login';
import { Signup } from './Components/LoginPage/Signup';
import { Navbar } from './Components/HomePage/Navbar';
import Calculator from './Components/Calculator/Calculator';
import WeatherApp from './Components/Weather/WeatherApp';


function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Signup" element={<Signup/>}/>
        <Route path="/Weather" element={<WeatherApp/>}/>
        <Route path="/Calculator" element={<Calculator/>}/>
      </Routes>

       
    </>
  )
}

export default App;
