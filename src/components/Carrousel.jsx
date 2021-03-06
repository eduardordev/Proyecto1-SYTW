import React, { Component } from 'react';
import "./carrousel.css";



class Carrousel extends Component{
    render(){
        return(
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">

                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  
                </div>

                <div className="carousel-inner">

                    <div className="carousel-item active">
                        <img src="src\imgs\LumiImage.png" className="d-block w-100" alt="..."></img>
                        <div className="carousel-caption d-none d-md-block">
                            <h1>Introducing LUMI</h1>
                            <h1>Keys Studio</h1>
                            <h1>Edition</h1>
                            <p>Lights, action, music</p>
                            <button type="button" className="btn btn-warning">BUY NOW</button>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <img src="src\imgs\LumiImage1.png" className="d-block w-100" alt="..."></img>
                        <div className="carousel-caption d-none d-md-block">
                            <h4>Use code: SPRINGSALE30</h4>
                            <h1>SPRING SALE</h1>
                            <h2>30% OFF Synths & Sounds</h2>
                            <button type="button" className="btn btn-primary">SHOP SALE</button>
                            <div className="bottom-bar"></div>
                            
                        </div>
                    </div>    
                </div>
            </div>
        );
    }
}

export default Carrousel;