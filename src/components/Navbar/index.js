import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {

    const location = useLocation();

    return(
    <nav class="navbar navbar-expand-lg">
  <div class="navbar-brand" href="/">Matthias Stadtler Web Development</div>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>About Me</Link>
      </li>
      <li class="nav-item">
        <Link to="/portfolio" className="nav-link">Portfolio</Link>
      </li>
      <li class="nav-item">
        <Link to="/contact" className="nav-link">Contact</Link>
      </li>
    </ul>
  </div>
</nav>
    )
}

export default Navbar;