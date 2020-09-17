import React, { useContext, useState } from 'react';

import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Review from './components/Review/Review';
import Inventory from './components/Inventory/Inventory';
import Notfound from './components/Notfound/Notfound';
import Productdetail from './components/Productdetails/Productdetail';
import Login from './components/Login/Login';
import Shipment from './components/Shipment/Shipment';
import { createContext } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';


export const usercontext = createContext();


function App() {
  const [loggedInUser,setLoggedInUser]=useState({});
  return (
  
    <usercontext.Provider value={[loggedInUser,setLoggedInUser]}>
      <h1>Email:{loggedInUser.email}</h1>
   <Router>
     <Header></Header>
     <Switch>
       <Route path="/shop"> 
        <Shop></Shop>
       </Route>
       <Route path="/review"> 
        <Review></Review>
       </Route>
       <Route path="/login"> 
        <Login></Login>
       </Route>
       <PrivateRoute path="/inventory">
         <Inventory></Inventory>
       </PrivateRoute>
     
       <PrivateRoute path="/shipment">
         <Shipment></Shipment>
       </PrivateRoute>
       <Route exact path="/">
        <Shop></Shop>
       </Route>
       
       <Route path="/Product/:productkey">
        <Productdetail></Productdetail>
       </Route>
       <Route path="*">
         <Notfound></Notfound>

       </Route>
     </Switch>
   </Router>
   </usercontext.Provider>
  );
}

export default App;
