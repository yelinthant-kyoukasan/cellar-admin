import React, { useEffect } from 'react'
import './Home.css'
import Widgets from '../Widgets/Widgets';
import AddNew from '../Add_New/AddNew';
import Layout from '../Layout/Layout';
import useItems from '../Context/StateContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import  { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toastOptions } from '../utilities/toastOptions';
import { getAllItemsRoute } from '../ApiRoutes/ApiRoutes';

function Home() {

  const navigate = useNavigate();
  const { items, dispatch } = useItems();

  useEffect(() => {
    if ( items.user === null ) {
      navigate('/login');
    } else {
      navigate('/')
    }
  }, [items])

  useEffect(() => {
    async function getItems () {
      await axios.get(getAllItemsRoute)
      .then( res => {
        const items = res.data.items;
        // console.log(items)
        dispatch({
          type: 'SET_ITEMS',
          payload: items,
        })
      })
    }
    getItems();
  }, [items])
  
  return (
    <div className="">
        <Layout>
            <div className="widgets">
              <Widgets type="USER"/>
              <Widgets type="INVENTORY"/>
              <Widgets type="ORDERS"/>
            </div>
            <div className="add-new-user">
              <AddNew />
            </div>
        </Layout>
    </div>
  )
}

export default Home