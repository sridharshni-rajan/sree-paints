import './App.css'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from "./pages/Home";
import Footer from './Footer/Footer';

function App() {

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<div>About Us</div>} />
          <Route path="/products" element={<div>Products</div>} />
          <Route path="/gallery" element={<div>Color Gallery</div>} />
          <Route path="/contact" element={<div>Contact</div>} />
        </Routes>
        <Footer />
      </Router> 
    </div>
  );
}

export default App
