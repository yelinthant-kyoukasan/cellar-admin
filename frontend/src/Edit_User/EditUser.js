import React, { useState, useEffect } from 'react'
import  { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './EditUser.css'
import useItems from '../Context/StateContext';
import axios from 'axios'
import { updateUserRoute } from '../ApiRoutes/ApiRoutes';
import { toastOptions } from '../utilities/toastOptions';
import Modal from '../Modal/Modal';
import { useNavigate } from 'react-router-dom';

function EditUser() {

    const { items, dispatch } = useItems();
    const navigate = useNavigate();

    useEffect(() => {
        if ( items.user === null ) {
          navigate('/login');
          setUsername('');
          setEmail('');
          setId('')
        }
      }, [items])

    useEffect(() => {
        if ( items.user ) {
            setUsername(items.user.username)
            setEmail(items.user.email)
            setId(items.user.id)
        }
  }, [])

    const [open, setOpen] = useState(false);
    const [id, setId] = useState();
    const [email, setEmail] = useState();
    const [username, setUsername] = useState();
    const [password, setPassword] = useState('');

    useEffect(() => {
        if ( open == false ) {
            setPassword('');
        }
    }, [items])

    

    // console.log("This is email and password passed onto -->" + eemail, eusername)
    // console.log("This is email and password --> ", email, username)
    // console.log(`${updateItemRoute}/${eid}`)

    const handleSubmit = (e) => {
        e.preventDefault();
        setOpen(true)
    }

  return (
    <div className="top-container">
        <div className="top">
              <h2>Edit Admin Details</h2>
        </div>
        <div className="bottom">
            <div className="right">
                <form>                    
                    <div className="formInput">
                        <label>Username</label>
                        <input type="text" requried onChange={e => setUsername(e.target.value)} value={username} />
                    </div>
                    <div className="formInput">
                        <label>Email</label>
                        <input type="text" requried onChange={e => setEmail(e.target.value)} value={email} />
                    </div>
                    <div className="formInput"> 
                        <label>Password</label>
                        <input type="password" requried onChange={e => setPassword(e.target.value)} value={password} placeholder="Leave blank if changes are not made" />
                        <p className='form-note'>Note - the password is hashed</p>
                    </div>
                    <div className="formButton">
                        <button type="submit" onClick={handleSubmit}>Save</button>
                    </div>
                </form>
            </div>
        </div>
        {
            open && (
                <Modal 
                    closeModal={setOpen}
                    email={email}
                    username={username}
                    newPassword={password}
                    id={id}
                />
            )
        }
        <ToastContainer />
    </div>
  )
}

export default EditUser