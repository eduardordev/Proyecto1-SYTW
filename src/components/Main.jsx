import React, { Component } from 'react';
import { LogoFacebook, LogoTwitter, LogoInstagram, LogoYoutube } from 'react-ionicons';
import "./main.css";


class Main extends Component{
    render(){
        return(
            <div className="main-pg">
                <div className="title-pg">Productos principales</div>
                <div className="frames1">
                    <div className="f1">

                        <h5>LUMI Keys Studio Edition</h5>
                        <img src="src\imgs\lumi1.PNG" alt="" className="f11" width="90%" height=""/>
                        <span className="expl">Explorar →</span>

                    </div>
                    <div className="f1">
                        <h5 className="sft">Software</h5>
                        <img src="src\imgs\mac.PNG" alt="" className="f12" width ="80%"/>
                        <span className="expl">Explorar →</span>
                    </div>
                    <div className="f1">

                        <h5>Sounds</h5>
                        <img src="src\imgs\framis.PNG" alt="" className="f13"  width="100%" height=""/>
                        <span className="expl">Explorar →</span>
                        
                    </div>
                    <div className="f1">

                        <h5>Seaboard</h5>
                        <img src="src\imgs\seaboard.PNG" alt="" className="f14"  width="90%" height=""/>
                        <span className="expl">Explorar →</span>
                        
                    </div>
                </div>

                <div className="art-container">
                    <div className="title-pg">Las últimas historias de ROLI</div>

                    <div className="list-t">
                        <ul>
                            <li>Ver todos</li>
                            <li>Artists</li>
                            <li>Education</li>
                            <li>Events</li>
                            <li>Features</li>
                            <li>News</li>
                            <li>Videos</li>
                            <li>Soundpacks</li>
                        </ul>       
                    </div>

                    <div className="articles">

                        <div className="section1">
                            <div className="bigbox">
                                <img src="src\imgs\rafa.jpg" alt="" className="rafa" width ="100%"/>
                                
                                <div className="textybox">
                                    <h2>Rafael Szaban: The sound designer from Atlantis</h2>
                                </div>

                                <div className="datext">
                                    <p>April 16th 2021</p>
                                    <a>Features</a>
                                </div>

                                <div className="historia">Historia principal</div>
                                

                            </div>
                            <div className="twoverbox">
                                <div className="boxy">
                                    <img src="src\imgs\bluemorado.PNG" alt="" className="rafa" height ="100%" />

                                    <div className="boxyb">
                                        <div className="textybox" >
                                            <h3>MPE: Discover the latest apps and updates</h3>

                                            <div className="datext" id="datext">
                                                <p>March 21st 2021</p>
                                                <a>Videos</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="boxy1">
                                    <div className="boxyb">
                                        <div className="textybox" >
                                            <h3>Hear the latest songs from our all-ROLI playlist</h3>

                                            <div className="datext" id="datext">
                                                <p>December 18th 2018</p>
                                                <a>Videos</a>
                                            </div>
                                        </div>
                                    </div>

                                    <img src="src\imgs\im.jpg" alt="" className="rafa" height ="100%" />  
                                    
                                </div>
                                

                            </div>

                        </div>
                        <div className="section2">
                            <div className="barbox">

                                <LogoFacebook
                                    color={'#fafafa'} 
                                    height="38px"
                                    width="38px"
                                />
                                <LogoTwitter
                                    color={'#fafafa'} 
                                    height="38px"
                                    width="38px"
                                />
                                <LogoInstagram
                                    color={'#fafafa'} 
                                    height="38px"
                                    width="38px"
                                />
                                <LogoYoutube
                                    color={'#fafafa'} 
                                    height="38px"
                                    width="38px"
                                    
                                />

                            </div>
                            <div className="barbox1">
                                <input type="search" name="search" id="search" placeholder="¿Quieres enterarte de las ultimas novedades de ROLI? Regístrate"/>
                                <input type="submit" className="submit" value="Regístrate"/>

                            </div>

                        </div>
                        
                        <div className="box">

                        </div>
                        <div className="box">

                        </div>
                        <div className="box">

                        </div>
                        <div className="box">

                        </div>
                        <div className="box">

                        </div>
                        <div className="box">

                        </div>
                        <div className="box">

                        </div>
                        <div className="box">

                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default Main;