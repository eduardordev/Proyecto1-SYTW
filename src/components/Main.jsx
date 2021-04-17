import React, { Component } from 'react';
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
            </div>
        );
    }
};

export default Main;