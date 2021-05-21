import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const Navbarwith = props => (
        <div className="navbar-content">

            <Navbar bg="light" expand>
              <Navbar.Brand href="#home">{props.name}</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto" activeKey="#home">
                  <Nav.Link href="#home" >Home</Nav.Link>
                  <Nav.Link href="#page2">Page 2</Nav.Link>
                  <Nav.Link href="#page3">Page 3</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
              
            <div className="container">
              <h1>Basic Navbar Example</h1>
              <p>A navigation bar is a navigation header that is placed at the top of the page.</p>
            </div>
        </div>
      );

export default Navbarwith;