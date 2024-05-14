import React from "react";
import { BrowserRouter as Router, Route, Routes, Link, Outlet } from "react-router-dom";
import './../styles/App.css';

const Home = () => (
  <div>
    <h2>Index</h2>
  </div>
);

const Women = () => (
  <div>
    <h2>Women Items:</h2>
    <ul>
      <li><Link to="/women/Grooming">Grooming</Link></li>
      <li><Link to="/women/Shirt">Shirt</Link></li>
      <li><Link to="/women/Trouser">Trouser</Link></li>
      <li><Link to="/women/Jewellery">Jewellery</Link></li>
    </ul>
   
     
   
    <Outlet />
  </div>
);

const Grooming = () => (
  <div>
    <h3>Grooming</h3>
    {/* Grooming related content */}
  </div>
);

const Tshirt = () => (
  <div>
    <h3>Tshirt</h3>
    {/* Tshirt related content */}
  </div>
);

const Trouser = () => (
  <div>
    <h3>Trouser</h3>
    {/* Trouser related content */}
  </div>
);

const Jewellery = () => (
  <div>
    <h3>Jewellery</h3>
    {/* Jewellery related content */}
  </div>
);

const App = () => {
  return (
    <main>
        {/* Do not remove the main div */}
    <Router>
    <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/women">Women</Link></li>
        </ul>
        </nav>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/women" element={<Women />} >
          <Route path="Grooming" element={<Grooming />} />
      <Route path="Shirt" element={<Tshirt />} />
      <Route path="Trouser" element={<Trouser />} />
      <Route path="Jewellery" element={<Jewellery />} />
      </Route>
        </Routes>
        
    </Router>
    </main>
  )
}

export default App;
