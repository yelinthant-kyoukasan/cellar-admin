import React, { useState } from 'react'
import './Modal.css'
import  { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useItems from '../Context/StateContext';
import axios from 'axios'
import { updateUserRoute } from '../ApiRoutes/ApiRoutes';
import { toastOptions } from '../utilities/toastOptions';

function Modal({ closeModal, email, username, newPassword, id }) {

    const [password, setPassword] = useState("");
    const { items, dispatch } = useItems();

    // console.log(updateUserRoute)
    // console.log(newPassword)
    // console.log(email, username, newPassword, password, id)

    const handleSubmit = async (e) => {
        e.preventDefault();

        //validation processes
        if (password.length < 8) {
            toast.error("Password must have at least 8 characters", toastOptions)
        } else if (email.length < 8) {
            toast.error("Email must have at least 8 characters", toastOptions)
        } else if (newPassword.length != 0 && newPassword.length < 8) {
            toast.error("New password must have at least 8 characters", toastOptions)
        } else if (username.length < 8) {
            toast.error("Username must have at least 8 characters", toastOptions)
        }
        else {
            await axios.put(`${updateUserRoute}/${id}`, {
                username,
                email,
                newPassword,
                password
            })
            .then( res => {

                // console.log(res.data.newUser)

                const username = res.data.newUser.username;
                const email = res.data.newUser.email;
                const id = res.data.newUser._id;

                // console.log(res.data.getNewUser)
                // console.log(username, email, id);
                closeModal(false)
                dispatch({
                    type: 'SET_USER',
                    user: {
                        username,
                        email,
                        id,
                    },
                })
                toast.success("Successfully Updated!", toastOptions)
            })
            .catch( err => {
                // console.log(err)
                toast.error(err.response.data, toastOptions)
            })
        }
    }

  return (
    <div className="modalBackground">
        <div className="modalOverlay"></div>
        <div className="modalContainer">
            <div className="modal-title">
                <p>Please Enter Your Password To Proceed</p>
            </div>
            <div className="modal-inputs">
                {/* <p>Password</p> */}
                <input type="text" onChange={e => setPassword(e.target.value)} value={password} placeholder='Password'/>
            </div>
            <div className="modal-button">
                <button onClick={() => closeModal(false)}>Close</button>
                <button onClick={handleSubmit}>Continue</button>
            </div>
        </div>
        <ToastContainer />
    </div>
  )
}

export default Modal