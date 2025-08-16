import Home from './Home/Home';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Inventory from './Inventory/Inventory';
import useItems from './Context/StateContext';
import Login from './Auth/Login'
import Register from './Auth/Register'
import EditItem from './Edit_Item/EditItem';
import Profile from './Profile/Profile';

function App() {

  const { items, dispatch } = useItems();
  // console.log(items)

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/inventory" element={<Inventory />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/edititem/:id" element={<EditItem />} />
          <Route exact path="/profile" element={<Profile />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
