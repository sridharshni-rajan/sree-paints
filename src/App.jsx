import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Footer from './Footer/Footer';

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/Footer" element={<Footer/> }/>
          </Routes>
      </Router>

      
    </div>
  )
}

export default App
