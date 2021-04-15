import React, { Component } from 'react';
import "./header.css";

class Header extends Component{
    render(){
        return(
            <header>
                <div class="navbar">
                    
                    <ul class="navlinks">

                        <a className= "lili">LOG IN</a>
                        <a className="line"></a>
                        <a className= "lili2">SUPPORT</a>
                        
                    </ul>
                </div>
         
            </header>  
        );
    }
};

export default Header;