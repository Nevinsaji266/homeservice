
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Auth from './pages/Auth'
import Pagenotfound from './pages/Pagenotfound'
import Footer from './components/Footer'
import Services from './pages/Services'
import Clean from './pages/Clean'
import Reparing from './pages/Reparing'
import Handyman from './pages/Handyman'
import Pestcontrol from './pages/Pestcontrol'
import Garden from './pages/Garden'
import Homerenovation from './pages/Homerenovation'
import Beauty from './pages/Beauty'
import Laundary from './pages/Laundary'
import Booking from './pages/Booking'
import Aboutus from './pages/Aboutus'




function App() {


  return (
    <>
   <Routes>
    
      <Route path='/' element={<Home/>} />
 
      <Route path='/login' element={<Auth/>} />
      <Route path='/register' element={<Auth/>} />
      <Route path='/service' element={<Services/>} />
      <Route path='/clean' element={<Clean/>} />
      <Route path='/repairing' element={<Reparing/>} />
      <Route path='/handyman' element={<Handyman/>} />
      <Route path='/pest' element={<Pestcontrol/>} />
      <Route path='/garden' element={<Garden/>} />
      <Route path='/renovation' element={<Homerenovation/>} />
      <Route path='/beauty' element={<Beauty/>} />
      <Route path='/laundary' element={<Laundary/>} />
      <Route path='/booking' element={<Booking/>} />
      <Route path='/about' element={<Aboutus/>} />

  
   
    
      <Route path='*' element={<Pagenotfound/>} />
      

    </Routes>
    <Footer/>
    </>
  )
}

export default App
