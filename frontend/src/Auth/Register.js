import React, { useState } from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom'
import  { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { addUserRoute } from '../ApiRoutes/ApiRoutes';
import useItems from '../Context/StateContext';
import { toastOptions } from '../utilities/toastOptions';

function Register() {

  const navigate = useNavigate();
  const { items, dispatch } = useItems();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();

    // console.log(items)

  const handleSubmit = async (e) => {
    e.preventDefault();

    // console.log(username, password, email)

    if (password.length < 8) {
        toast.error("Password should be more than 8 characters!", toastOptions)
    } else if (username.length < 6) {
        toast.error("Username should be more than 6 characters!", toastOptions)
    } else {
        await axios.post(addUserRoute, {
            username,
            email,
            password
        })
        .catch( err => {
          // console.log(err.response.data)
          toast.error(err.response.data.mssg, toastOptions)
        })
        .then( res => {
          
          const username = res.data.user.username;
          const email = res.data.user.email;
          const id = res.data.user._id;

          dispatch({
            type: 'SET_USER',
            user: {
              username,
              email,
              id,
            }
          })
          setUsername('');
          setEmail('');
          setPassword('');
          navigate('/')        
        })
    }
  }


  return (
    <div className='container'>
      <div className="login-container">
        <div className="login-title">
          <p>Cellar's Admin</p>
        </div>
        <div className="login-box">
          <p className='login-box-title'>New Admin!</p>
          <div className="login-inputs">
            <input 
                type="text" 
                placeholder='USERNAME' 
                value={username} 
                onChange={(e) => setUsername(e.target.value)}
            />
            <input 
                type="text" 
                placeholder='EMAIL' 
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
            />
            <input type="password" 
                placeholder='PASSWORD' 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
            />
            <button onClick={handleSubmit}>Sign up</button>
          </div>
          <div className="login-register">
            <p onClick={() => navigate('/login')}>Already have an account?</p>
          </div>
        </div>
      </div>
      <ToastContainer />    
    </div>
  )
}

export default Register