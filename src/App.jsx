import React from 'react'
import Home from './Pages/Home';
import About from './Pages/About';
import Support_us from './Pages/Support_us';
import './App.css';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Routes>
      <Route path='/' >
        <Route index element={<Home />}/>
        <Route path='about' element={<About />}/>
        <Route path='support' element={<Support_us />}/>
      </Route>
    </Routes>
  )
}

export default App