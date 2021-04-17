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
                                    <img src="src\imgs\bluemorado.png" alt="" className="rafa" height ="100%" />

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

                        <div className="section3">
                        
                            <div className="box">
                                <img src="src\imgs\pandemic.jpg" alt="" className="rafa" width ="100%"/>
                                    
                                <div className="textybox">
                                    <h5>ROLI's Pandemic PPE Project</h5>
                            </div>

                                <div className="datext">
                                    <p>April 16th 2021</p>
                                    <a>Features</a>
                                </div>

                            </div>
                            <div className="box">
                                <img src="src\imgs\flume.jpg" alt="" className="rafa" width ="100%"/>
                                    
                                <div className="textybox">
                                    <h5>On tour with Flume and his 16 Lightpad Blocks</h5>
                                </div>
        
                                <div className="datext">
                                    <p>April 16th 2021</p>
                                    <a>Features</a>
                                </div>

                            </div>
                            <div className="box">
                                <img src="src\imgs\blocks.jpg" alt="" className="rafa" width ="100%"/>
                                    
                                <div className="textybox">
                                    <h5>Watch BLOCKS and ROLI Studio in action</h5>
                                </div>
        
                                <div className="datext">
                                    <p>April 16th 2021</p>
                                    <a>Features</a>
                                </div>

                            </div>
                            <div className="box">
                                <img src="src\imgs\edshee.jpg" alt="" className="rafa" width ="100%"/>
                                    
                                <div className="textybox">
                                    <h5>How ROLI artists set Ed Sheeran´s album alight</h5>
                                </div>
            
                                <div className="datext">
                                    <p>April 16th 2021</p>
                                    <a>Features</a>
                                </div>

                            </div>
                            <div className="box">
                                <img src="src\imgs\created.jpg" alt="" className="rafa" width ="100%"/>
                                    
                                <div className="textybox">
                                    <h5>Why I created LUMI</h5>
                                </div>
                
                                <div className="datext">
                                    <p>April 16th 2021</p>
                                    <a>Features</a>
                                </div>

                            </div>
                            <div className="box">
                                <img src="src\imgs\serum.png" alt="" className="rafa" width ="100%"/>
                                    
                                <div className="textybox">
                                    <h5>Create MPE magic with Serum and ROLI instruments</h5>
                                </div>
                
                                <div className="datext">
                                    <p>April 16th 2021</p>
                                    <a>Features</a>
                                </div>

                            </div>
                            <div className="box">
                                <img src="src\imgs\soundhive.png" alt="" className="rafa" width ="100%"/>
                                    
                                <div className="textybox">
                                    <h5>Soundhive Sessions: Crafting a sci-fi sound with Erin Barra</h5>
                                </div>
                
                                <div className="datext">
                                    <p>April 16th 2021</p>
                                    <a>Features</a>
                                </div>

                            </div>
                            <div className="box">
                                <img src="src\imgs\lightpad.jpg" alt="" className="rafa" width ="100%"/>
                                    
                                <div className="textybox">
                                    <h5>Lightpad Live: On stage with Flight Of The Conchords, Action Bronson and more</h5>
                                </div>
                
                                <div className="datext">
                                    <p>April 16th 2021</p>
                                    <a>Features</a>
                                </div>

                            </div>
                        </div>

                        <div className="more">
                            <div className="more1">
                                Ver más
                            </div>
                            <img className="flechita" src="src\imgs\flechita.png" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default Main;