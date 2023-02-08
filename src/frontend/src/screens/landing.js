import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import '../index.css';
import NavigBar from './navbar';
import { login } from '../actions/userActions'
// import 'bootstrap/dist/css/bootstrap.min.css';

function Landing(location) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    // add functionality for handling form submission here
  }
  let navigate = useNavigate();

  const routeChange = () =>{ 
    let path = '/register'; 
    navigate(path);
  }
  
  const dispatch = useDispatch()
  const redirect =  '/home'
  const success_url =  '/home'
  const userLogin = useSelector(state => state.userLogin)
    const { error, loading, userInfo } = userLogin

    useEffect(() => {

        if (userInfo) {
          // console.log("user is-",userInfo)
          navigate(redirect)
        }
    }, [navigate, userInfo, redirect])

    const submitHandler = (e) => {
        e.preventDefault()
        console.log("in handle")
        dispatch(login(email, password)).then((response) => {

        //   console.log(response)

        //   if(response){
        //     navigate(success_url);
        //   }
        //   else{
        //     navigate('/');
        //   }

        })
    }

  return (
    <div className="parallax">
      <NavigBar/>
      <div className="container" style={{ color: 'white' }}>
        <h1>SPORTING</h1>

        <br/>
        <br/>

        <h3 style={{ color: 'white' ,textAlign:"center"}}>Sign-in for faster checkout</h3>
        <br />
        <form onSubmit={submitHandler} className=''>
              <div className="form-field">
                <input
                  type="email"
                  className="rounded form-control"
                  id="email"
                  placeholder="Email or Username"
                  style={{ height: 45 ,width:"50%",margin:"auto"}}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <br />
              <div className="mb-3">
                <input
                  type="password"
                  className="rounded form-control"
                  id="password"
                  placeholder="Password"
                  aria-describedby="Help"
                  style={{ height: 45 ,width:"50%",margin:"auto"}}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div id="Help" className="form-text" style={{ color: 'lightgray',paddingLeft:"25%"}}>
                By tapping sign-in you are agreeing to WebStore's Terms of Use and Privacy policy
                </div>
              </div>

              
              <br />
              <button type="submit" className="rounded-pill btn btn-light" style={{ width: 150, height: 45, textAlign: 'center',margin:"auto",marginLeft:"25%" }}>
                  Sign In
                </button>
              <br/>
              <br/>
              <button type="submit" className="rounded-pill btn btn-outline-light" style={{ width: 150, height: 45, textAlign: 'center',marginLeft:"25%" }} onClick = {routeChange}>
                Sign Up
              </button>
              <br/>
              <a href="#" style={{marginLeft:"50%"}}>Forgot password?</a>
            </form>
            
        
      </div>
      
    </div>
  );
}

export default Landing;
