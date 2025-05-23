import React from 'react'
import Home from './pages/Home'
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Footer from './component/Footer'
import Hotels from './pages/Hotels'
import NavBar from './component/NavBar'

const App = () => {
  return (
    <div>
      <BrowserRouter>
    <NavBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/hotels' element={<Hotels/> } />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App