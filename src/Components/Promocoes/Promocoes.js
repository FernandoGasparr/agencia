import React from "react";
import './Promocoes.css'


export default() =>{
    return (
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://thumbcdn-z.hotelurbano.net/c5i_4QiYJIuFGPb8cSb-IFHC9gA=/320x240/center/middle/filters:quality(40)/https://novo-hu.s3.amazonaws.com/reservas/ota/prod/hotel/1740/prodigy-santos-dumont-002_20180515184208.jpg" className="d-block w-100" alt="..."/>
 <div className="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
      <div className="profile-options">
                    <buttons className="btn primary-btn">
                        {""}
                        Comprar {" "}
                    </buttons>
                </div>
    </div>
    <div className="carousel-item">
      <img src="https://thumbcdn-z.hotelurbano.net/FHNdPBxnyPGYPmfr1LOIf0PJYYg=/320x240/center/middle/filters:quality(40)/http://media.omnibees.com/Images/13843/Property/736798.jpg" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
      <div className="profile-options">
                    <buttons className="btn primary-btn">
                        {""}
                        Comprar {" "}
                    </buttons>
                </div>
    </div>
    <div className="carousel-item">
      <img src="https://thumbcdn-z.hotelurbano.net/NVKvVkUuYylKpBXncIGDZXE7Uj4=/320x240/center/middle/filters:quality(40)/http://media.omnibees.com/Images/11351/Property/653291.jpg" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
      <div className="profile-options">
                    <buttons className="btn primary-btn">
                        {""}
                        Comprar {" "}
                    </buttons>
                </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    
        );
}