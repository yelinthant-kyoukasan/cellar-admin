import React, { useState } from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { loginUserRoute } from '../ApiRoutes/ApiRoutes';
import useItems from '../Context/StateContext';
import  { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toastOptions } from '../utilities/toastOptions';

function Login() {

  const navigate = useNavigate();
  const { items, dispatch } = useItems();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async (e) => {
    e.preventDefault();
    // console.log("IN the function");

    await axios.post(loginUserRoute, {
      email,
      password
    })
    .then( res => {
      console.log("sent req to server");
      console.log(res.data.mssg);
      const username = res.data.emailCheck.username;
      const email = res.data.emailCheck.email;
      const id = res.data.emailCheck._id;

      dispatch({
        type: 'SET_USER',
        user: {
          username,
          email,
          id,
        }
      })
      
      toast.success('Successfully Logged In!', toastOptions);
      navigate('/');
    })
    .catch( err => {
      toast.error(err.response, toastOptions);
    })
  }

  console.log(email, password);
  //kyoukaemii26@#

  return (
    <div className='container'>
      <div className="login-container">
        <div className="login-title">
          <p>Cellar's Admin</p>
        </div>
        <div className="login-box">
          <p className='login-box-title'>Welcome, admin!</p>
          <div className="login-inputs">
            <input type="text" placeholder='EMAIL' value={email} onChange={e => setEmail(e.target.value)} />
            <input type="password" placeholder='PASSWORD' value={password} onChange={e => setPassword(e.target.value)}/>
            <button onClick={handleSignIn}>Sign in</button>
          </div>
          <div className="login-register">
            <p onClick={() => navigate('/register')}>Create an account here</p>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}

export default Login