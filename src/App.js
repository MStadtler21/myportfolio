import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import Contact from './components/Contact';




function App() {
  return (
    <>
    <Router basename="/myportfolio">
    <Navbar />
    <body>
    <Route exact path="/" component={AboutMe} />
    <Route exact path="/portfolio" component={Portfolio} />
    <Route exact path="/contact" component={Contact} />
    </body>
    </Router>
    <Footer />
    </>
  );
}

export default App;
