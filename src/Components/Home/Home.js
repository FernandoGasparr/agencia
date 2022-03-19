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
                        <i class="fa fa-facebook-square" aria-hidden="true"></i>
                        </a>
                        <a href="https://www.google.com/">
                        <i class="fa fa-google-plus-square" aria-hidden="true"></i>
                        </a>
                        <a href="https://www.instagram.com/">
                        <i class="fa fa-instagram" aria-hidden="true"></i>
                        </a>
                        <a href="https://www.youtube.com/">
                        <i class="fa fa-youtube-square" aria-hidden="true"></i>
                        </a>
                        <a href="https://www.twitter.com/">
                        <i class="fa fa-twitter-square" aria-hidden="true"></i>
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
        
        

        <section className="about-area">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        
                    </div>
                    <br></br>
                <div className="col md-6">
                    <img className="img-fluid" src="https://assets.b9.com.br/wp-content/uploads/2017/08/meiacincodez-e-catsu_escritorio19.jpg" alt="Favela Travels"/>
                </div>

                <div className="col-md-6">
                    <h3 className="about-tittle">Favela Travels - Nova Maneira de viajar </h3>
                    <p> Nossas viagens são adaptadas para ao cliente e seu propósito</p>
                <p>Com a Favela Travels você pode esquecer toda a burocracia de um financiamento</p>
                <p>Nossos preços  são adequados ao público das períferias! Entretenimento e lazer com qualidade que a favela merece!.</p>
                <p>Com a Favela Travels todo mundo pode viajar de avião, basta se programar!</p>
                <p>Veja outros diferenciais:</p>

                <ul id="about-list">
                      <li><i class="fa fa-check-square-o" aria-hidden="true"></i>Sem comprovação de renda</li>
                      <li><i class="fa fa-check-square-o" aria-hidden="true"></i>Diversos pontos de venda em todo Brasil.</li>
                      <li><i class="fa fa-check-square-o" aria-hidden="true"></i>Planejamos toda a sua viagem.</li>
                      <li><i class="fa fa-check-square-o" aria-hidden="true"></i>Ofertamos as vantagens de toda viagem pré-paga.</li>
                </ul>
                </div>

                </div>

            </div>
        </section>


        <section>

        <div className="col-12">
              <h3 className="profile-role-tagline-card">Nossas Promoções </h3>
            </div>

        <div className="card-group">
  <div className="card">
    <img src= 'https://thumbcdn-z.hotelurbano.net/pvIgS1KTitZasygnSsCoQCN-tms=/320x240/center/middle/filters:quality(40)/http://media.omnibees.com/Images/9289/Property/465426.PNG' className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Trancoso - BA</h5>
      <p className="card-text">Venha Conhecer Trancoso !</p>
      
      <div className="about-list">
      <ul id="about-list">
                      <li><i class="fa fa-check-square-o" aria-hidden="true"></i>Transporte aéreo</li>
                      <li><i class="fa fa-check-square-o" aria-hidden="true"></i>Transporte terrestre.</li>
                      <li><i class="fa fa-check-square-o" aria-hidden="true"></i>Hospedagem 05 diárias.</li>
                      <li><i class="fa fa-check-square-o" aria-hidden="true"></i>All inclusive</li>
        </ul>
        </div>
        
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
      <p className="card-text">Venha conhecer Bonito !</p>
    
      <ul id="about-list">
                      <li><i class="fa fa-check-square-o" aria-hidden="true"></i>Transporte aéreo</li>
                      <li><i class="fa fa-check-square-o" aria-hidden="true"></i>Transporte terrestre.</li>
                      <li><i class="fa fa-check-square-o" aria-hidden="true"></i>Hospedagem 05 diárias.</li>
                      <li><i class="fa fa-check-square-o" aria-hidden="true"></i>All inclusive.</li>
                    </ul>

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
      
      <ul id="about-list">
                      <li><i class="fa fa-check-square-o" aria-hidden="true"></i>Transporte aéreo</li>
                      <li><i class="fa fa-check-square-o" aria-hidden="true"></i>Transporte terrestre.</li>
                      <li><i class="fa fa-check-square-o" aria-hidden="true"></i>Hospedagem 05 diárias.</li>
                      <li><i class="fa fa-check-square-o" aria-hidden="true"></i>All inclusive.</li>
                    </ul>

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