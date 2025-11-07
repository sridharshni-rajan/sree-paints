import './App.css'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Footer from './Footer/Footer';
import Home from './Home/Home';


function App() {

  return (
    <div className="App"> 
    
   
      <Router>
        <Routes>
          <Route path="/Home" element={<Home/>} />
          <Route path="/" element={<Footer/> }/>
          </Routes>
      </Router>

      
    </div>
  )
}

export default App
