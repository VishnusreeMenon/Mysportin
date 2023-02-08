// import products from '../products';
import React from 'react';
import {useEffect, useState} from "react";
import { useNavigate } from 'react-router-dom';
import NavigBar from './navbar';

// console.log(products)
const Test = () => {
  let navigate = useNavigate();
  function routeChange(id){ 
    let path = '/product/' +id; 
    navigate(path);
  }
  const [prod_list, productSet] = useState([])

    // Fetch data --> 1.)
    useEffect(() => {

        // Fetch the Payroll Data related to the logged in User
        fetch('http://127.0.0.1:8000/api/products/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                //  Authorization: `Token ${localStorage.getItem('token')}`
            },
        })
        .then(res => res.json())
        .then(data => {
            // console.log(data)
          productSet(data)
          });
    },[]);
    
    console.log(prod_list.products)
  var prodList = prod_list.products && prod_list.products.map(function(prod,index){
    
      return(
        <div className="card h-40" style={{width: "400px"}} key={index}>
              <img src={prod.image} width = "373px" height = "297px" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{prod.name}</h5>
                <p className="fs-11" style={{opacity: "0.7"}}>For kids</p>
                
                <p className="rounded-pill bordered" style={{backgroundColor: "blueviolet", width: "70px", textAlign: "center"}}>{prod.rating}/5</p>
                <p>({prod.numReviews})</p>
                <p className="card-text">${prod.price}</p>
                <p>Delivery by 31st January</p>
                <button className="btn btn-outline-dark rounded-pill" onClick={()=> routeChange(prod._id)}>Buy Now?</button>
              </div>
            </div>
      )
  })
  
  return (
    <div>
        <NavigBar/>
        <div className="">

          <h1 className=""  style={{textAlign: "center", paddingTop:"8rem"}}>ARCADE</h1>
          <br />
          <div className="container">
            <div className="row row-cols-1 row-cols-lg-3 g-5">
              
              {prodList}

            </div>
          </div>
        </div>
          
          
          

    </div>)}


export default Test;
          
