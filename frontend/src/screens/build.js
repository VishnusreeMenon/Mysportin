import React, { Component } from 'react';
import Navigbar from './navbar.js';
import '../index.css'
class Build extends Component{
    render(){
        return(
            <div className="build-parallax">
                <Navigbar/>
                <br/>
                <br/>
                <h1 className="mt-5"  style={{textAlign:"center",color:"violet",underline:""}}>WHAT WE OFFER</h1>
                

                <div className="container">

                    <div className="row row-cols-1 row-cols-lg-2 g-5">
                        <div className="col mt-3">
                            
                            <div className="" style={{width: "28rem",height:"330px", opacity:0.70,backgroundColor:"white"}}>
                                    
                                <div className="card-body">
                                    <h4 className="card-title" style={{textAlign:"center",color:"violet"}}>Arcade</h4>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.Even more content
                                    </p>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.Even more content
                                    </p>
                                    <a href="/arcade">

                                        <button className=" rounded-pill btn btn-dark" style={{marginLeft:"35%"}} href="http://127.0.0.1:5500/Front-End_Templates/arcade/arcade.html">Explore Now</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col mt-3">
                            <div className="" style={{width: "28rem",height:"330px", opacity:0.70,backgroundColor:"white"}}>
                                    
                                <div className="card-body">
                                    <h4 className="card-title" style={{textAlign:"center",color:"violet"}}>VR Games</h4>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.Even more content
                                    </p>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.Even more content
                                    </p>
                                    <button className=" rounded-pill btn btn-dark" style={{marginLeft:"35%"}}>Explore Now</button>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col mt-3">
                            <div className="" style={{width: "28rem",height:"330px", opacity:0.70,backgroundColor:"white"}}>
                                    
                                <div className="card-body">
                                    <h4 className="card-title" style={{textAlign:"center",color:"violet"}}>Simulator</h4>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.Even more content
                                    </p>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.Even more content
                                    </p>
                                    <button className=" rounded-pill btn btn-dark" style={{marginLeft:"35%"}}>Explore Now</button>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col mt-3">
                            <div className="" style={{width: "28rem",height:"330px", opacity:0.70,backgroundColor:"white"}}>
                                    
                                <div className="card-body">
                                    <h4 className="card-title" style={{textAlign:"center",color:"violet"}}>Trampoline Park</h4>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.Even more content
                                    </p>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.Even more content
                                    </p>
                                    <button className=" rounded-pill btn btn-dark" style={{marginLeft:"35%"}}>Explore Now</button>
                                </div>
                            </div>
                        </div>
                        
                        
                        

                        
                    </div>
                
                </div>
                

            </div>
            
        )
    }
}

export default Build;