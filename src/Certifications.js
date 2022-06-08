import React, { useState } from 'react';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import Footer from './Footer';

class Certifications extends React.Component {
  constructor(props) {
    super(props);
    
  }

  render() {
    return (
      <div className="container">
        <h1>Certifications</h1>
        <Footer />
      </div>
    )
  }
}

export default Certifications;