import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { BrowserRouter, Route, Routes } from 'react-router'
import SignIn from './pages/Signin.jsx'
import Signup from './pages/Signup.jsx'
import Home from './pages/Home.jsx'
import AboutUs from './pages/AboutUs.jsx'
import Dashboard from './Dashboard.jsx'
import Team from './pages/Team.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    {/* <App />
   */}
   <Routes>
    <Route path='/' element={<SignIn/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/home' element={<Home/>}/>
    <Route path='/aboutus' element={<AboutUs/>}/>
    <Route path='/dashboard' element={<Dashboard/>}/>
    <Route path='/team' element={<Team/>}/>
   </Routes>
  </BrowserRouter>,
);
