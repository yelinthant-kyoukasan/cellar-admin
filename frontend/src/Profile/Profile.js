import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Layout from '../Layout/Layout'
import useItems from '../Context/StateContext'
import './Profile.css'
import UserDetails from '../UserDetails/UserDetails';
import EditUser from '../Edit_User/EditUser';

function Profile() {

    const { items, dispatch } = useItems();
    const navigate = useNavigate();
    const [id, setId] = useState();
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();

    useEffect(() => {
        if ( items.user === null ) {
          navigate('/login');
          setId('');
          setUsername('');
          setEmail('');
        }
      }, [items])

    //   console.log(items.user)

      useEffect(() => {
            if ( items.user ) {
                setId(items.user.id)
                setUsername(items.user.username)
                setEmail(items.user.email)
            }
      }, [])

    // const id = items.user.id;
    // const username = items.user.username;
    // const email = items.user.email;    
    // const password = items.user.password;

  return (
    <>
    <Layout>
        <div className="user-details">
            <div className="user-header">
                <h1>Admin Details</h1>
            </div>
            {/* User Details */}
            <UserDetails 
                id={items.user == null ? null : id}
                email={items.user == null ? null : email}
                username={items.user == null ? null : username}
            />
            {/* ------------- */}
            <EditUser 
                //  eid={items.user == null ? null : id}
                //  eemail={items.user == null ? null : email}
                //  eusername={items.user == null ? null : username}
                // //  epassword={items.user == null ? null : password}
            />
        </div>  
    </Layout>
</>
  )
}

export default Profile