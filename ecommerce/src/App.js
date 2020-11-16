import React,{ Component } from 'react'
import {Switch, Route} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Components/Navbar'
import ProductList from './Components/ProductList'
import Details from './Components/Details'
import Cart from './Components/Cart'
import Default from './Components/Default'

function App() {
  return (
   <React.Fragment>
     <Navbar></Navbar>
     <Switch>
       <Route exact path="/" component={ProductList}></Route>
       <Route path="/details" component={Details}></Route>
       <Route path="/cart" component={Cart}></Route>
       <Route  component={Default}></Route>
     </Switch>
     
   </React.Fragment>
  )
}

export default App;
