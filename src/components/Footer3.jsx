import React, { Component } from 'react';
import "./footer3.css";

class Footer3 extends Component{
    render(){
        return(
            <div className="finalfooter">
                <div className="copyright">Copyright © 2021 ROLI Ltd. Todos los derechos reservados.</div>
                <div className="optcopy">
                    <a href="">Legal</a>
                    <a href="">Privacidad</a>
                    <a href="">Cookies</a>
                </div>
                <div className="rolinfo">Obtén más información sobre el ecosistema de ROLI: </div>
                <div className="optcopy1">
                    <a href="">Blend,</a>
                    <a href="">JUCE</a>
                    <div>y</div>
                    <a href="">FXpansion</a>
                </div>
            </div>
        );
    }
}

export default Footer3;