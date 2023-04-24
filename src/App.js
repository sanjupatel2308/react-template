import logo from './logo.svg';
import './App.css';
import Home from './components/Home/home';
import { Route, Routes } from 'react-router-dom';
import SignUp from './components/user/signup/signup';
import SignIn from './components/user/signIn/signin';
import Cart from './components/user/cart/cart';
import Checkout from './components/user/checkout/checkout';
import Card from './components/cards/card';
import MyAccount from './components/user/myaccount/myaccount';
import Donate from './components/DonateBooks/donatebooks';
import DonateForm from './components/DonateBooks/donateform';
import Login from "./components/user/signIn/login";

function App() {
  return <>

  <Routes>
   <Route path='/' element={<Home/>}/>
   <Route path='/signup' element={<SignUp/>}/>
   <Route path='/signin' element={<SignIn/>}/>
   <Route path='/cart' element={<Cart/>}/>
   <Route path='/card' element={<Card/>}/>
   <Route path='/checkout' element={<Checkout/>}/>
   <Route path='/myaccount' element={<MyAccount/>}/>
   <Route path='/donate' element={<Donate/>}/>
   <Route path='/donateform' element={<DonateForm/>}/>
   <Route path='/login' element={<Login/>}/>


  </Routes>
 
  </>
}

export default App;
