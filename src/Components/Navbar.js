import React from 'react';
import { Link } from 'react-router-dom';
import '././Styles/Navbar.css'



export default() =>{
  
  return (

     <nav className="navbar navbar-expand-lg navbar-mainbg">
          <i class="fa fa-plane" aria-hidden="true"></i>
       <Link className="navbar-brand navbar-logo" to= "/" exact> FAVELA TRAVELS
         
       </Link>

       <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
					aria-expanded="false" aria-label="Toggle navigation">

					<span className="navbar-toggler-icon"><i class="fa fa-bars" aria-hidden="true"></i></span>
				</button>
        
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
              <div className="hori-selector">
                <div className="left"></div>
                <div className="right"></div>
              </div>

              <li className="nav-item active">
                <Link className="nav-link" to="/" exact>
                  <i className="fas fa-tachometer-alt"></i>Home
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/Promocoes" exact>
                  <i className="fas fa-tachometer-alt"></i>Promoções
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/Destino" exact>
                  <i className="fas fa-tachometer-alt"></i>Destinos
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/Contato" exact>
                  <i className="fas fa-tachometer-alt"></i>Contato
                </Link>
              </li>

          </ul>
          
        </div>

      </nav> 
  );
}


