import React, { Component } from 'react';
import { LogoFacebook, LogoTwitter, LogoInstagram, LogoYoutube } from 'react-ionicons';
import "./footer2.css";

class Footer2 extends Component{
    render(){
        return(
            <div className="footernav">
                <div className="imgsf">
                    
                    <img src="src\imgs\image.png" alt="" className="isotype"/>
                </div>
                <div className="colscont">
                    <div className="cols">
                        <div className="col">
                            <ul>
                                <li className="titli">EMPRESA</li>
                                <li>Sobre nosotros</li>
                                <li>Empleo</li>
                                <li>Nuestro equipo</li>
                                <li>Contacto</li>
                                <li>Prensa</li>
                                <li>Authorized Resellers</li>
                            </ul>
                        </div>
                        <div className="col">
                            <ul>
                                <li className="titli">ATENCIÓN AL CLIENTE</li>
                                <li>Aprendizaje</li>
                                <li>Envios</li>
                                <li>Devoluciones</li>
                                <li>Soporte</li>
                                <li>Buscar una tienda</li>
                            </ul>
                        </div>
                        <div className="col">
                            <ul>
                                <li className="titli">COMUNIDADES</li>
                                <li>Programadores</li>
                                <li>Foro</li>
                                <li>MIDI Polyphonic</li>
                                <li>Expression</li>
                            </ul>
                            
                        </div>
                        <div className="col" id="col4">

                            <ul>
                                <li className="titli">BOLETÍN DE NOVEDADES</li>
                                <div className="searchi">
                                    <input type="search" name="" id="tt" placeholder="¿Quieres enterarte de las últimas"/>
                                    JOIN
                                </div>
                                <li className="titli">FOLLOW US</li>
                                
                                <div className="followbox">

                                    <LogoFacebook
                                        color={'#fafafa'} 
                                        height="28px"
                                        width="28px"
                                    />
                                    <LogoTwitter
                                        color={'#fafafa'} 
                                        height="28px"
                                        width="28px"
                                    />
                                    <LogoInstagram
                                        color={'#fafafa'} 
                                        height="28px"
                                        width="28px"
                                    />
                                    <LogoYoutube
                                        color={'#fafafa'} 
                                        height="28px"
                                        width="28px"
                                        
                                    />

                                </div>
                                
                                <li></li>
                                <li></li>
                            </ul>

                        </div>
                    </div>
                    <div className="money">
                        <div>Select currency</div>
                        <div className="currency">£ GBP</div>
                        <div className="currency">€ EUR</div>
                        <div className="currency">$ USD</div>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default Footer2;