import React, { Component } from 'react';
import "./navbar.css";
import { BasketOutline } from 'react-ionicons';


class NavBar extends Component{
    render(){
        return(

               <div className="navhead">
                   <div className = "images">
                   <figure>
                       <img className = "logo" src="src\imgs\roli.jpg" alt="logo"></img>
                   </figure>
                   
                   </div>
                   
                    <ul className="navlinks1">
                        <a className= "h1">PRODUCTS</a>
                        <a className= "h2">STORIES</a>
                        <a className= "h3">LEARN</a>
                    </ul>
                    <div className="basket">

                        <BasketOutline
                            color={'#FFFFFF'} 
                            height="35px"
                            width="35px"
                        />

                    </div>
                    

               </div>
        );
    }
};

export default NavBar;