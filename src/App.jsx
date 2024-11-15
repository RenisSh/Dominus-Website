import React from 'react';
import { useState } from 'react';
import Navbar from './components/Navbar';
import counseling from './assets/counseling.svg'
import bailiff from './assets/bailiff.svg'
import collection from './assets/collection.svg';
import { Outlet, Router } from 'react-router-dom';
import ServicesComponent from './components/ServicesComponent';
import Team from './components/Team';
import Footer from './components/Footer';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
  // <Router>
      <div>
          {/* <div className='color: bg-[var(--dark-beige)]'> */}
          {/* sticky top-0 */}
          {/* <div className='color: bg-[var(--Remi)]'> 
            <Navbar/>
          </div> */}
          <div>
            <ServicesComponent/>
          </div>
          <div>
            <Team/>
          </div>
          {/* <div>
            <Footer/>
          </div> */}
          
      </div>  
  // </Router>
  )
}

export default App
