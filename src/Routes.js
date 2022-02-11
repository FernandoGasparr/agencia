import React from "react";
import {Route,Routes} from 'react-router-dom'
import Destino from "./Components/Destino/Destino";
import Promocoes from "./Components/Promocoes/Promocoes";
import Home from "./Components/Home/Home";
import Contato from "./Components/Contato/Contato";



export default() =>{
    return (
<Routes> 
    <Route path="/" element={<Home/>}/>
    <Route path="/Promocoes" element={<Promocoes/>}/>
    <Route path="/Destino" element={<Destino/>}/>
    <Route path="/Contato" element={<Contato/>}/>

</Routes>
    );
}