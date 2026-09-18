import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css'
import Products from './components/products/Products';
import Home from './components/home/Home';
import Navbar from './components/shared/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import { Toaster } from 'react-hot-toast';
import React, { useState } from 'react'
import Cart from './components/cart/Cart';
import LogIn from './components/auth/LogIn';
import PrivateRouter from './components/PrivateRouter';
import Register from './components/auth/Register';
import Checkout from './components/checkout/Checkout';
import PaymentConfirmation from './components/checkout/PaymentConfirmation';
import AdminLayout from './components/admin/AdminLayout';
import Dashboard from './components/admin/dashboard/Dashboard';
import Category from './components/admin/categories/Category';
import Orders from './components/admin/orders/Orders';
import Sellers from './components/admin/sellers/Sellers';
import AdminProducts from './components/admin/products/AdminProducts';
import GlobalHelp from './components/shared/GlobalHelp';
import ComingSoon from './components/shared/ComingSoon';
import { useAuthSession } from './hooks/useAuthSession';

function App() {
  useAuthSession();

  return (
    <React.Fragment>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile" element={<ComingSoon />} />
          <Route path="/profile/orders" element={<ComingSoon />} />
          <Route path="/" element={<PrivateRouter />}>
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/order-confirm" element={<PaymentConfirmation />} />
          </Route>
          <Route path="/" element={<PrivateRouter publicPage/>}>
            <Route path="/login" element={<LogIn />} /> 
            <Route path="/register" element={<Register />} />
          </Route>
          <Route path="/" element={<PrivateRouter adminOnly/>}>
            <Route path="/admin" element={<AdminLayout />}>
              <Route path='' element={<Dashboard />} />
              <Route path='categories' element={<Category />} />
              <Route path='orders' element={<Orders />} />
              <Route path='sellers' element={<Sellers />} />
              <Route path='orders' element={<Orders />} />
              <Route path='products' element={<AdminProducts />} />
            </Route>
          </Route>
        </Routes>
      </Router>
      <Toaster  position='top-center'/>
      <GlobalHelp />
    </React.Fragment>

  )
}

export default App
