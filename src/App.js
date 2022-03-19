import React from "react";
import Routes from "./Routes";
import{BrowserRouter} from 'react-router-dom'
import Navbar from "./Components/Navbar";
import './App.css'
import Footer from "./Components/Footer/Footer";


function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar />
      <Routes/>
      <Footer/>
      </BrowserRouter>

    </>
  );
}

export default App;
