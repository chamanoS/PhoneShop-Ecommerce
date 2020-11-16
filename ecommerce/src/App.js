import React,{ Component } from 'react'
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
     <ProductList></ProductList>
     <Details></Details>
     <Cart></Cart>
     <Default></Default>
   </React.Fragment>
  )
}

export default App;
