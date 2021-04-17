import React, { Component } from 'react';
import "./header.css";

class Header extends Component{
    render(){
        return(
            <header>
                <div className="navbar">
                    
                    <ul className="navlinks">

                        <a className= "lili">LOG IN</a>
                        
                        <a className= "lili2">SUPPORT</a>
                        
                    </ul>
                </div>
         
            </header>  
        );
    }
}

export default Header;