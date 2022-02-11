import React from 'react';
import { Link } from 'react-router-dom';
import '././Styles/Navbar.css'

export default() =>{
    return (
     <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Agência Travels</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ">     
            <ul className='nav-link'>
                <li>
                    <Link to='/'>
                    <a>Home</a>
                    </Link>
                </li>   
                    
                <li> 
                    <Link to='/Promocoes'>
                    <a>Promoções</a>
                    </Link>
                    </li> 
                    
                <li> 
                    <Link to='/Destino'>
                    <a>Destino</a>
                    </Link>
                </li> 

                <li>
                    <Link to='/Contato'>
                    <a>Contato</a>
                    </Link>
                </li>
            </ul>
        </div>
        </div>
        </div>
    </nav>
  );
}


