import React, { Component,useState } from 'react';
import Navigbar from './navbar.js';
import '../index.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';




function Build(){
    const [budget, setBudget] = useState(0);
    const [area, setArea] = useState(0);
    const [location,setLocation] = useState('');
    
    const handleBudget = (event) => {
        setBudget(event.target.value);
      };
      const handleArea = (event) => {
          setArea(event.target.value);
      };
  
      const handleLocation = (event) => {
          setLocation(event.target.value);
      };
  
      const options = [
          "Arcade",
          "VR Games",
          "Simulator",
          "Trampoline Park",
          "Soft Play",
          "Kiddie Riddles",
          "Ticket Competition"
      ];
  
      const [selectedOptions, setSelectedOptions] = useState([]);
  
      const handleOptionChange = (event) => {
          const updatedSelectedOptions = [...selectedOptions];
          const selectedOption = event.target.value;
          if (event.target.checked) {
            updatedSelectedOptions.push(selectedOption);
          } else {
            updatedSelectedOptions.splice(
              updatedSelectedOptions.indexOf(selectedOption),
              1
            );
          }
          setSelectedOptions(updatedSelectedOptions);
        };
        return(

            <div className="build-parallax">
                <Navigbar/>
                <br/>
                <br/>
                <h1 className="mt-5"  style={{textAlign:"center",color:"violet",underline:""}}>WHAT WE OFFER</h1>
                

                <div className="container">

                    <div className="row row-cols-1 row-cols-lg-2 g-5">
                        <div className="col mt-3">
                            
                            <div className="card" style={{width: "100%",height:"", opacity:0.70,backgroundColor:"white"}}>
                                    
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
                            <div className="card" style={{width: "100%",height:"", opacity:0.70,backgroundColor:"white"}}>
                                    
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
                            <div className="card" style={{width: "100%",height:"", opacity:0.70,backgroundColor:"white"}}>
                                    
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
                            <div className="card" style={{width: "100%",height:"", opacity:0.70,backgroundColor:"white"}}>
                                    
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
                <br/>
                <br/>
                <h1 style={{textAlign:"center",color:"violet",underline:""}}>Build your Gamezone</h1>
                <div className='row row-cols-1 row-cols-lg-2 g-5'>
                    <div className='col mt-3' style={{paddingLeft:'2rem'}}>
                        <h3>Budget</h3>
                        <input
                            type="range"
                            min={0}
                            max={1000000}
                            value={budget}
                            step={100}
                            onChange={handleBudget}
                            className="theSlider"
                        />
                        <p>Rs. {budget}</p>
                        <br/>
                        <h3>Area</h3>
                        <input
                            type="range"
                            min={0}
                            max={100000}
                            value={area}
                            step={100}
                            onChange={handleArea}
                            className="theSlider"
                        />
                        <p>{area} sft.</p>
                        <br/>
                        <h3>Location</h3>
                        <input
                            type="text"
                            placeholder="Enter Manually"
                            onChange={handleLocation}
                            className="rounded"
                            style = {{width:"60%"}}
                        /><br/>
                        {/* <a href="#">Detect Location</a> */}
                        <br/><br/>
                    </div>
                    <div className='col mt-3' style={{paddingLeft:'2rem'}}>
                        <h3>Category</h3>
                        <div className="checkboxes">
                            {options.map((option) => (
                                <div key={option}>
                                <label>
                                    <input
                                    type="checkbox"
                                    value={option}
                                    checked={selectedOptions.includes(option)}
                                    onChange={handleOptionChange}
                                    />
                                    &emsp;{option}
                                </label>
                                </div>
                            ))}
                        </div>
                        <br/><br/>
                        <Button variant="dark" className='rounded-pill'>Result</Button>
                        <br/>
                        <br/><br/>
                        <label>
                            <input type="checkbox" value={"yes"} /> Exclude out of Stock
                        </label>
                        <br/><br/><br/>
                    </div>
                </div>

            </div>
            
        )
    }


export default Build;