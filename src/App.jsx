import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Login from './Login'




function App() {
  return (
    <Router>
      <Routes>
      <Route path='/' element={<Login />}></Route>
      <Route path='/home' element={<Home />}></Route>
      
      
      </Routes>
    </Router>
   
  )
}

export default App
