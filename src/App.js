import React, { Component } from 'react';
import './App.css';
import NavBar from "./components/NavBar.jsx";
import Header from "./components/Header.jsx";
import Carrousel from "./components/Carrousel.jsx";
import Main from "./components/Main.jsx";
import Footer1 from "./components/Footer1.jsx";
import Footer2 from "./components/Footer2.jsx";
import Footer3 from "./components/Footer3.jsx";


class App extends Component {
    render() {
        return (
            <div className="app">
                <div className = "header">
                   <Header></Header>
                </div>
               <div className = "navbar1">
                   <NavBar></NavBar>
               </div>
               
               <div className = "carrousel">
                   <Carrousel></Carrousel>
               </div>
               <div className = "main">
                   <Main></Main>
               </div>
               <div className = "footer1">
                   <Footer1></Footer1>
               </div>
               <div className = "footer2">
                    <Footer2></Footer2>
               </div>
               <div className = "footer3">
                    <Footer3></Footer3>
               </div>
            </div>
        );
    }
};

export default App;
