import React, { useState } from 'react';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import Footer from './Footer';

class ContactMe extends React.Component {
  constructor(props) {
    super(props);
    
  }

  render() {
    return (
      <div className="container">
        <h1>Contact Me</h1>
        <Footer />
      </div>
    )
  }
}

export default ContactMe;