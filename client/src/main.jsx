import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { BrowserRouter, Route, Routes } from 'react-router'
import SignIn from './pages/Signin.jsx'
import Signup from './pages/Signup.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    {/* <App />
   */}
   <Routes>
    <Route path='/' element={<SignIn/>}/>
    <Route path='/signup' element={<Signup/>}/>
   </Routes>
  </BrowserRouter>,
);
