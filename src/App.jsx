import React from 'react'
import Header1 from './Components/Header1/Header1'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import ProductDetails from './components/ProductDetails/ProductsDetails';
import CartDetails from './components/Cart/CartDetails';
import Footer from './components/Footer/Footer';
import CheckOut from './components/CheckOut/CheckOut';


const App = () => {
  return (
    <div>
      <Header1 />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/productDetails/:id" element={<ProductDetails />} />
        <Route path='/cart' element={<CartDetails />} />
        <Route path='/checkout' element={<CheckOut />} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App