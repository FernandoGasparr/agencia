import React from "react";


export default() =>{
    return (

      <div className="texto">
        
        <h3>Voos a partir de Rio de Janeiro - Santos Dumont </h3>
        
        <form>
  <div>
    <label for="diaa">Informe a data do seu vôo de ida:</label>
    <input type="date" id="diaa" name="diaa"/>
    <label for="diaa">Informe a data do seu vôo de volta:</label>
    <input type="date" id="diaa" name="diaa"/>
  </div>
</form>



  <section className="container-destinos">  
<div className="row row-cols-1 row-cols-md-2 g-4">
  <div className="col">
    <div className="card">
      <img src="https://www.rangoetrago.com.br/wp-content/uploads/2021/01/rio-azuis-aurora-do-tocantins-3.jpg" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Bonito-MS</h5>
        <ul id="about-list">
        <li><i class="fa fa-check-square-o" aria-hidden="true"></i>Transporte aéreo</li>
                        <li><i class="fa fa-check-square-o" aria-hidden="true"></i>Transporte terrestre</li>
                        <li><i class="fa fa-check-square-o" aria-hidden="true"></i>Hospedagem com 05 diárias</li>
                        <li><i class="fa fa-check-square-o" aria-hidden="true"></i>All inclusive</li>
                        <li>R$ 299,00</li>
                      </ul>

                      
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="https://www.melhoresdestinos.com.br/wp-content/uploads/2021/03/minas-gerais-capa-820x430.jpg" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Belo Horizonte - MG</h5>
        <ul id="about-list">
        <li><i class="fa fa-check-square-o" aria-hidden="true"></i>Transporte aéreo</li>
                        <li><i class="fa fa-check-square-o" aria-hidden="true"></i>Transporte terrestre</li>
                        <li><i class="fa fa-check-square-o" aria-hidden="true"></i>Hospedagem com 05 diárias</li>
                        <li><i class="fa fa-check-square-o" aria-hidden="true"></i>All inclusive</li>
                        <li>R$ 299,00</li>
                      </ul>

                      <div className="profile-options">
                    <buttons className="btn primary-btn">
                        {""}
                        COMPRAR {" "}
                    </buttons>
         </div>   
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="https://todepassagem.clickbus.com.br/wp-content/uploads/2020/09/Praias-de-Florian%C3%B3polis.jpg" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Trancoso - BA</h5>
        <ul id="about-list">
        <li><i class="fa fa-check-square-o" aria-hidden="true"></i>Transporte aéreo</li>
                        <li><i class="fa fa-check-square-o" aria-hidden="true"></i>Transporte terrestre</li>
                        <li><i class="fa fa-check-square-o" aria-hidden="true"></i>Hospedagem com 05 diárias</li>
                        <li><i class="fa fa-check-square-o" aria-hidden="true"></i>All inclusive</li>
                        <li>R$ 299,00</li>
                      </ul>

                      <div className="profile-options">
                    <buttons className="btn primary-btn">
                        {""}
                        COMPRAR {" "}
                    </buttons>
         </div>   
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="https://www.manaus.am.gov.br/wp-content/uploads/2016/05/manaus-teatro-amazonas.jpg" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Manaus-AM</h5>
        <ul id="about-list">
        <li><i class="fa fa-check-square-o" aria-hidden="true"></i>Transporte aéreo</li>
                        <li><i class="fa fa-check-square-o" aria-hidden="true"></i>Transporte terrestre</li>
                        <li><i class="fa fa-check-square-o" aria-hidden="true"></i>Hospedagem com 05 diárias</li>
                        <li><i class="fa fa-check-square-o" aria-hidden="true"></i>All inclusive</li>
                        <li>R$ 299,00</li>
                      </ul>

                      <div className="profile-options">
                    <buttons className="btn primary-btn">
                        {""}
                        COMPRAR {" "}
                    </buttons>
         </div>   
      </div>
    </div>
  </div>
</div>
</section>  
</div>

    );
}