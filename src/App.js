import React from 'react';
//import react-router-dom
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
//import pages
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import AllProducts from './pages/AllProducts';
import Profile from './pages/Profile';
import OnlyWomens from './pages/OnlyWomens';
import SignUp from './pages/SignUp';
import ForgotPassword from './pages/Forgot';
//import components
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Footer from './components/Footer';
const App = () => {
  return (
    <div className='overflow-hidde'>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/product/:id' element={<ProductDetails/>}/>
          <Route path='/allProducts' element={<AllProducts/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/womens' element={<OnlyWomens/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/forgot' element={<ForgotPassword/>}/>
        </Routes>
        <Sidebar/>
        <Footer/>
      </Router>
    </div>
  )
}

export default App