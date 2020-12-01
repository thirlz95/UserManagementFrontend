import React from 'react';
//img
import logo from '../../assets/logo.png';
//bootstrap
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Col from 'react-bootstrap/Col';
//animate
import { Animated } from 'react-animated-css';

// have hamburger with logo/login next to it (like portal)

const Footer = () => {
  return (
    <div className="mt-4">
      <Animated animationInDelay={350} animationIn="fadeInUp" isVisible={true}>
        <Navbar className="navbar" id="footer">
          <div className="col pl-0 text-align-left">
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-around">
              <Nav.Link className="navbar-link" href="#">
                Privacy Policy
              </Nav.Link>
              <Nav.Link className="navbar-link" href="#">
                Terms & Conditions
              </Nav.Link>
            </Navbar.Collapse>
          </div>
        </Navbar>
      </Animated>
    </div>
  );
};

export default Footer;
