import React, { useState, useEffect, createRef } from 'react';
import { Link, navigate } from 'gatsby';
import { Navbar, Nav, Container } from 'react-bootstrap';
import * as styles from './Header.module.css'

const Header = (prop) => {
  return (
    <>
      <Navbar bg="light" expand="md" className={styles.navbar}>
        <Container>
          <Navbar.Brand as={Link} to='/'>
            <img src={'etrLogo.png'} width='60' alt='logo' className={styles.brand}/>
            {' '}MEDIA PRODUCTIONS
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="headerNav" />
          <Navbar.Collapse id='headerNav'>
            <Nav className="ms-auto">
              <Nav.Link as={Link} to='/'>Home</Nav.Link>
              <Nav.Link as={Link} hidden>Services</Nav.Link>
              <Nav.Link as={Link} to='/contact'>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
};

export default Header;
