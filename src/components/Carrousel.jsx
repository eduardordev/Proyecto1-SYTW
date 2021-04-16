import React, { Component } from 'react';
import "./carrousel.css";



class Carrousel extends Component{
    render(){
        return(
            <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel" data-bs-interval="7000">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="src\imgs\LumiImage.png" class="d-block w-100" alt="..."></img>
                    </div>
                    <div class="carousel-item">
                        <img src="src\imgs\LumiImage1.png" class="d-block w-100" alt="..."></img>
                    </div>
                </div>
            </div>
        );
    }
};

export default Carrousel;