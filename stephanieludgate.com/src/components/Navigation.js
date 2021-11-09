import React, { Component } from 'react';
import { Link } from 'react-scroll';
import { Nav, Navbar } from 'react-bootstrap';

import ElipsesSVG from '../icons/nav-elipses';

class Navigation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            expanded: false,
            isMobile: false
        };
        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.closeNavbar = this.closeNavbar.bind(this);
        this.checkWidth = this.checkWidth.bind(this);
    }
    
    componentDidMount() {
        window.addEventListener("resize", this.checkWidth);
    }
    
    toggleNavbar() {
        this.setState({
            expanded: !this.state.expanded
        });
    }
    
    closeNavbar() {
        this.setState({
            expanded: false
        });
    }
    
    checkWidth() {
        if(!this.state.isMobile && window.innerWidth < 600) {
            this.setState({isMobile: true});
        } else if (this.state.isMobile && window.innerWidth >= 600) {
            this.setState({isMobile: false});
        }
    }
    
    render() {
                
        return (
            <Navbar className="display-hidden display-md-block" collapseOnSelect expand="md" sticky="top" variant="dark" id="navbar" expanded={this.state.expanded}>
                <div className="container">
                    <Link
                        className="navbar-brand"
                        style={{cursor: "pointer"}}
                        activeClass="active"
                        to="welcome"
                        spy={true}
                        smooth={true}
                        offset={-60}
                        duration={500}
                    >
                    stephanie ludgate
                    </Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" id="navbar-toggle-button" onClick={this.toggleNavbar}>
                        <ElipsesSVG/>
                    </Navbar.Toggle>
                    <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                    <Nav>
                        <Link
                            className="nav-link text-center text-md-justify d-none d-md-block"
                            style={{cursor: "pointer", color: "white"}}
                            activeClass="active"
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={-50}
                            duration={500}
                            onClick={this.closeNavbar}
                        >
                            About
                        </Link>
                        <Link
                            className="nav-link text-center text-md-justify d-md-none"
                            style={{cursor: "pointer", color: "white"}}
                            activeClass="active"
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={-204}
                            duration={500}
                            onClick={this.closeNavbar}
                        >
                            About
                        </Link>
                        <Link
                            className="nav-link text-center text-md-justify d-none d-md-block"
                            style={{cursor: "pointer", color: "white"}}
                            activeClass="active"
                            to="skills"
                            spy={true}
                            smooth={true}
                            offset={-50}
                            duration={500}
                            onClick={this.closeNavbar}
                        >
                            Skills
                        </Link>
                        <Link
                            className="nav-link text-center text-md-justify d-md-none"
                            style={{cursor: "pointer", color: "white"}}
                            activeClass="active"
                            to="skills"
                            spy={true}
                            smooth={true}
                            offset={-204}
                            duration={500}
                            onClick={this.closeNavbar}
                        >
                            Skills
                        </Link>
                        <Link
                            className="nav-link text-center text-md-justify d-none d-md-block"
                            style={{cursor: "pointer", color: "white"}}
                            activeClass="active"
                            to="projects"
                            spy={true}
                            smooth={true}
                            offset={-50}
                            duration={500}
                            onClick={this.closeNavbar}
                        >
                            Projects
                        </Link>
                        <Link
                            className="nav-link text-center text-md-justify d-md-none"
                            style={{cursor: "pointer", color: "white"}}
                            activeClass="active"
                            to="projects"
                            spy={true}
                            smooth={true}
                            offset={-204}
                            duration={500}
                            onClick={this.closeNavbar}
                        >
                            Projects
                        </Link>
                        <Link
                            className="nav-link text-center text-md-justify d-none d-md-block"
                            style={{cursor: "pointer", color: "white"}}
                            activeClass="active"
                            to="contact"
                            spy={true}
                            smooth={true}
                            offset={-50}
                            duration={500}
                            onClick={this.closeNavbar}
                        >
                            Contact
                        </Link>
                        <Link
                            className="nav-link text-center text-md-justify d-md-none"
                            style={{cursor: "pointer", color: "white"}}
                            activeClass="active"
                            to="contact"
                            spy={true}
                            smooth={true}
                            offset={-204}
                            duration={500}
                            onClick={this.closeNavbar}
                        >
                            Contact
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
        );
    }
}

export default Navigation;