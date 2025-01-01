import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Login from './Components/Login';
import Contact from './Components/Contact';
import OurService from './Components/OurService';
import Products from './Components/Products';

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/our-service" element={<OurService/>} />
          <Route path="/products" element={<Products/>} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
