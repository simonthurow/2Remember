import React, { useState } from 'react'
import './Login.css';
import {auth} from '../Firebase.js';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

export const Login = () => {
  const [userCredentials, setUserCredentials] = useState({});
  const [error, setError] = useState('');

  function handleCredentials(e){
    setUserCredentials({...userCredentials, [e.target.name]: e.target.value})
  } 

  function handleSignup(e){
    e.preventDefault();
    createUserWithEmailAndPassword(auth, userCredentials.email, userCredentials.password)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      console.log(user);
      // ...
    })
    .catch((error) => {
      setError(error.message);
      // ..
    });
  }

  function handleLogin(e){
    e.preventDefault();
    signInWithEmailAndPassword(auth, userCredentials.email, userCredentials.password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user);
      // ...
    })
    .catch((error) => {
      setError(error.message);
    });
  }

  return (
    <div className="wrapper">
      <form action=''>
        <h1>Welcome to 2Remember!</h1>

        <div className="input-box">
          <input name="email" type="text" placeholder='email'
            onChange={(e) => {handleCredentials(e)}}/>
        </div>
        <div className="input-box">
          <input name="password" type="password" placeholder='password'
            onChange={(e) => {handleCredentials(e)}}/>
        </div>

        <button onClick={(e) => {handleLogin(e)}} className="btn">Login</button>

        <div clas="type-Change">
          <p>Don't have an account?</p>
          <button onClick={(e)=>{handleSignup(e)}} className="btn">Sign up</button>
        </div>
      </form>
      {
        error && 
        <div className="error">
          {error}
        </div>
      }
    </div>
  )
}
