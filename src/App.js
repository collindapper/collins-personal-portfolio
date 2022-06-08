import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch } from "react-router-dom";
import LandingPage from './LandingPage';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Education from './Education';
import Experience from './Experience';
import Certifications from './Certifications';
import ContactMe from './ContactMe';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

const NotFound = () => {
  return <h2>404 Not Found</h2>
}

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-xxl bg-black py-5 sticky-top">
      <NavLink className="navbar-brand d-xxl-none ms-4" to="/">
        <img className="d-flex logo" src="/images/logo.png"></img>
      </NavLink>
      <button className="navbar-toggler custom-toggler me-3 ms-auto " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
        <ul className="navbar-nav mt-2 pb-4 border-bottom border-dark">
        <li className="nav-item fontSecondary ms-5">
            <NavLink className="nav-link d-flex align-items-center" to="/" activeStyle={{ color: 'white' }}><i className="fas fa-user me-1"></i>Home</NavLink>
          </li>
          <li className="nav-item fontSecondary ms-5">
            <NavLink className="nav-link d-flex align-items-center" to="/about-me/" activeStyle={{ color: '#E18700' }}><i className="fas fa-address-card me-1"></i>About Me</NavLink>
          </li>
          <li className="nav-item fontSecondary ms-5">
            <NavLink className="nav-link d-flex align-items-center" to="/projects/" activeStyle={{ color: '#E18700' }}><i className="fas fa-code me-1"></i>Projects</NavLink>
          </li>
          <li className="nav-item fontSecondary ms-5">
            <NavLink className="nav-link d-flex align-items-center" to="/education/" activeStyle={{ color: '#E18700' }}><i className="fas fa-graduation-cap me-1"></i>Education</NavLink>
          </li>
          <li className="nav-item fontSecondary ms-5">
            <NavLink className="nav-link d-flex align-items-center" to="/experience/" activeStyle={{ color: '#E18700' }}><i className="fas fa-briefcase me-1"></i>Experience</NavLink>
          </li>
          <li className="nav-item fontSecondary ms-5">
            <NavLink className="nav-link d-flex align-items-center" to="/certifications" activeStyle={{ color: '#E18700' }}><i className="fas fa-medal me-1"></i>Certifications</NavLink>
          </li>
          <li className="nav-item fontSecondary ms-5">
            <NavLink className="nav-link d-flex align-items-center" to="/contact-me/" activeStyle={{ color: '#E18700' }}><i className="fas fa-user-plus me-1"></i>Contact Me</NavLink>
          </li>
        </ul>
      </div>
      </nav> 

      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/about-me/" component={AboutMe} />
        <Route path="/projects/" component={Projects} />
        <Route path="/education/" component={Education} />
        <Route path="/experience/" component={Experience} />
        <Route path="/certifications/" component={Certifications} />
        <Route path="/contact-me/" component={ContactMe} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
