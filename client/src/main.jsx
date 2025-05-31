

import { BrowserRouter, Route, Routes } from 'react-router'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import Home from './pages/Home.jsx'
import UploadPaper from './pages/UploadPaper.jsx'
import ViewPaper from './pages/ViewPaper.jsx'
import AbotUs from './pages/AbotUs.jsx'
import Developer from './pages/Developer.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
   
   <Routes>
    <Route path='/' element={<Login/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/home' element={<Home/>}/>
    <Route path='/aboutus' element={<AbotUs/>}/>
    <Route path='/dashboard' element={<Dashboard/>}/>
    <Route path='/developer' element={<Developer/>}/>
    <Route path='/upload' element={<UploadPaper/>}/>
    <Route path='/view' element={<ViewPaper/>}/>
   </Routes>
  </BrowserRouter>,

);
