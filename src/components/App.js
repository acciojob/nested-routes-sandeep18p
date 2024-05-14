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
      <li><Link to="/women/grooming">Grooming</Link></li>
      <li><Link to="/women/tshirt">Tshirt</Link></li>
      <li><Link to="/women/trouser">Trouser</Link></li>
      <li><Link to="/women/jewellery">Jewellery</Link></li>
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
    <Router>
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/women">Women</Link></li>
        </ul>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/women" element={<Women />} >
          <Route path="grooming" element={<Grooming />} />
      <Route path="tshirt" element={<Tshirt />} />
      <Route path="trouser" element={<Trouser />} />
      <Route path="jewellery" element={<Jewellery />} />
      </Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App;
