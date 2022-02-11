import React from "react";
import './Home.css';

export default() =>{
    return (

        <header>
  <div className='profile-container'>
            <div className="profile-parent">
                <div className="profile-details">
                    <div className="colz">
                    <div className='colz-icon'>
                        <a href="https://www.facebook.com/">
                            <i className="fa fa-facebook-square"></i>
                        </a>
                        <a href="https://www.google.com/">
                            <i className="fa fa-google-plus-square"></i>
                        </a>
                        <a href="https://www.instagram.com/">
                            <i className="fa fa-instagram-square"></i>
                        </a>
                        <a href="https://www.youtube.com/">
                            <i className="fa fa-youtube-square"></i>
                        </a>
                        <a href="https://www.twitter.com/">
                            <i className="fa fa-twitter"></i>
                        </a>
                    </div>
                    </div>


                <div className="profile-details-name">
                    <span className="primary-text">
                        {" "}
                        Olá, somos a <span className="hightlighted-text">Favela Travels</span>
                    </span>
                </div>
                <span className="profile-role-tagline">
                Com a nossa agência todo mundo pode viajar de avião, saiba mais sobre nós !
                </span>
                <div className="profile-options">
                    <buttons className="btn primary-btn">
                        {""}
                        Veja Mais {" "}
                    </buttons>
                </div>
                </div>
                <div className='profile-picture'>
                    <div className='profile-picture-background'>

                    </div>
                </div>
            </div>
        </div>
        
        <section>

        <span className="profile-role-tagline">
                Nossas Promoções !
                </span>

        <div className="card-group">
  <div className="card">
    <img src= 'https://thumbcdn-z.hotelurbano.net/pvIgS1KTitZasygnSsCoQCN-tms=/320x240/center/middle/filters:quality(40)/http://media.omnibees.com/Images/9289/Property/465426.PNG' className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Trancoso - BA</h5>
      <p className="card-text">Venha Conhecer Trancoso.</p>
      <p className="card-text"><small className="text-muted">Passagem aerea, terrestre e hospedagem ! </small></p>

      <div className="profile-options">
                    <buttons className="btn primary-btn">
                        {""}
                        Veja Mais {" "}
                    </buttons>
         </div>           

    </div>
  </div>
  <div className="card">
    <img src="https://thumbcdn-z.hotelurbano.net/DOntwp60xCqPJhfjhbY_g5MMHsg=/320x240/center/middle/filters:quality(40)/http://media.omnibees.com/Images/11228/Property/586872.jpg" className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Bonito - MS</h5>
      <p className="card-text">Venha conhecer Bonito.</p>
      <p className="card-text"><small className="text-muted">Passagem aerea, terrestre e hospedagem !</small></p>

      <div className="profile-options">
                    <buttons className="btn primary-btn">
                        {""}
                        Veja Mais {" "}
                    </buttons>
         </div>           


    </div>
  </div>
  <div className="card">
    <img src="https://thumbcdn-z.hotelurbano.net/B9w7xP_4bIQ1eb15jwr3kQQZgY8=/320x240/center/middle/filters:quality(40)/https://novo-hu.s3.amazonaws.com/reservas/ota/prod/hotel/3138/001-piscina-emiliano-rio-de-janeiro-001_20191203140800.png" className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Rio de Janeiro - RJ</h5>
      <p className="card-text"> Venha conhecer o Rio !</p>
      <p className="card-text"><small className="text-muted">Passagem aerea, terrestre e hospedagem !</small></p>

      <div className="profile-options">
                    <buttons className="btn primary-btn">
                        {""}
                        Veja Mais {" "}
                    </buttons>
         </div>           


    </div>
  </div>
</div>

        </section>
        </header>  
          
        
    );
}