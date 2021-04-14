import React, { Component } from 'react';
import "./navbar.css";

class NavBar extends Component{
    render(){
        return(
        <nav className="navbar">
            <ul>
                <li>SUPPORT</li>
                <a>LOG IN</a>
            </ul>
        </nav>
            
        )
    }
}

export default NavBar;