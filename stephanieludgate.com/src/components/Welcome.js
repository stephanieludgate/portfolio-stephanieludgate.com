import React, { Component } from 'react';
import { Link } from "react-scroll";

import BodyPNG from '../images/body-illustration.png';

class Welcome extends Component {
  render() {
    return (
        <>
        <section className="" id="welcome">
            <div className="container py-5">
                <div className="row my-1">
                    <div className="col-12 col-md-6 my-auto">
                        <h1 className="mb-0" id="welcome-heading"><span className="px-2">Hey there!</span></h1>
                        <h4 className="my-4" id="welcome-tagline">
                            My name is Steph and I&apos;m a Web Developer in Toronto, ON
                        </h4>
                        <div className="text-center text-md-left mb-4 mb-md-0">
                            <Link
                                className="primary-btn"
                                activeClass="active"
                                to="contact"
                                spy={true}
                                smooth={true}
                                offset={-50}
                                duration={500}
                            >
                            Get in Touch
                            </Link>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 mt-3">
                        <img src={BodyPNG} alt={BodyPNG} className="img-fluid" id="welcome-img" />
                    </div>
                </div>
            </div>
        </section>
        
        </>
    );
  }
}

export default Welcome;