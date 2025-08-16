import React, { useEffect} from 'react'
import './Inventory.css'
import { useNavigate } from 'react-router-dom';
import Layout from '../Layout/Layout';
import InvenWidgets from '../Inven_widgets/InvenWidgets';
import ItemTable from '../Item_Table/ItemTable';
import useItems from '../Context/StateContext';

function Inventory() {

  const navigate = useNavigate();
  const { items, dispatch } = useItems();

    useEffect(() => {
        if ( items.user === null ) {
          navigate('/login');
        } else {
          navigate('/inventory')
        }
      }, [items])

  return (
    <div className="inventory">
        <Layout>
            <div className="widgets">
              <InvenWidgets type="total_items"/>
              <InvenWidgets type="store_value"/>
              <InvenWidgets type="out_of_stock"/>
              <InvenWidgets type="categories"/>
            </div>
            <div className="item-table">
              <ItemTable />
            </div>
        </Layout>
    </div>
  )
}

export default Inventory