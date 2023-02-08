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
        <br />
        <div className="container" style={{ width: 350,paddingLeft:"auto" }}>
          <div className="position-relative  top-50 start-50 translate-middle" style={{ width: 350,paddingLeft:"auto" }}>
            <form onSubmit={submitHandler}>
              <div className="mb-3">
                <input
                  type="email"
                  className="rounded form-control"
                  id="email"
                  placeholder="Email or Username"
                  style={{ height: 45 }}
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
                  style={{ height: 45 }}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div id="Help" className="form-text" style={{ color: 'lightgray' }}>
                By tapping sign-in you are agreeing to WebStore's Terms of Use and Privacy policy
              </div>
              <br />
              <div className="mb-3">
                <button type="submit" className="rounded-pill btn-light" style={{ width: 350, height: 45, textAlign: 'center' }}>
                  Sign In
                </button>
              </div>
              <div className="mb-3">
                <button type="submit" className="rounded-pill btn btn-outline-light" style={{ width: 350, height: 45, textAlign: 'center' }} onClick = {routeChange}>
                  Sign Up
                </button>
              </div>
            </form>

            <a href="#">Forgot password?</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
