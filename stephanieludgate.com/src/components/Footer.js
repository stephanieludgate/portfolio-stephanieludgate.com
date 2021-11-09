import React, { Component } from 'react';

import {FaGithub, FaLinkedin, FaStackOverflow } from 'react-icons/fa';

class Footer extends Component {

  render() {

    const newDate = new Date();

    return (
        <footer>
            <div className="container py-4">
                <div className="row">
                    <div className="col-12 col-md-8 text-center text-md-left">
                        <div className="row">
                            <div className="col-12 pb-1">
                                <h5>More places to find <span className="cursive-font">me</span>.</h5>
                            </div>
                            <div className="col-12 pb-2 pb-md-0">
                                <a href="http://www.github.com/stephanieludgate" target="_blank" className="pr-3" rel="noopener noreferrer">
                                    <FaGithub />
                                </a>

                                <a href="http://www.linkedin.com/in/stephanie-ludgate" target="_blank" className="pr-3" rel="noopener noreferrer">
                                    <FaLinkedin />
                                </a>
        
                                <a href="https://stackoverflow.com/users/17264145/stephanieludgate" target="_blank" rel="noopener noreferrer">
                                    <FaStackOverflow />
                                </a>
        
                            </div>
                        </div>                    
                    </div>
                    <div className="col-12 col-md-4 text-center text-md-right my-auto general-font">
                        <span>&copy; Stephanie Ludgate {newDate.getFullYear()}</span>
                    </div>
                </div>
            </div>
        </footer>
    );
  }
}

export default Footer;