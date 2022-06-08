import React, { useState } from 'react';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

function Footer() {
  return (
    <div className="container mb-3">
      <div className="row">
        <div className="col-12 col-xl-6 pt-3 me-xl-auto">
          <h6 className="text-xl-start text-center footerText fontSecondary">Developed by <a className="footerLink" href="https://collins-personal-portfolio.netlify.app/" target="_blank">Collin Dapper</a>  © 2022</h6>
        </div>
        <div className="col-12 col-xl-6 pt-3 ms-auto ">
          <h6 className="text-xl-end text-center text-white fontSecondary"><a className="portfolioLink me-3" href="https://collins-personal-portfolio.netlify.app/" target="_blank"><i className="far fa-folder-open"></i> Portfolio</a><a className="linkedinLink me-3" href="https://www.linkedin.com/in/collin-dapper-a1b59a152/" target="_blank"><i className="fab fa-linkedin me-1"></i>LinkedIn</a><a className="githubLink" href="https://github.com/collindapper" target="-blank"><i className="fab fa-github me-1"></i>GitHub</a></h6>
        </div>
      </div>
    </div>
  );
}

export default Footer;