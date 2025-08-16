import React from 'react'
import './UserDetails.css'
import EditIcon from '@mui/icons-material/Edit';

function UserDetails({ id, username, email }) {
  return (
    <div className="user-container">
        <div className="user-img">
            <img src="https://www.shareicon.net/data/512x512/2016/05/24/770117_people_512x512.png" alt="" />
        </div>  
        <div className="user-details">
            <div className="user-infos">
                <div className="user-title">
                    <h3>{username}</h3>
                </div>
                <div className="email">
                    <p>Email - <span className='email-add'>{email}</span></p>
                </div>
                <div className="edit-button">
                        <button>
                            <EditIcon />
                        </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default UserDetails