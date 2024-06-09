// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap'
import { navLink } from '../data/index';
import '../dist/css/style.css'
import { NavLink } from 'react-router-dom';
import Logo from '../assets/Logo1.png';



const Navbarpage = () => {

    return (
        <div>
            <Navbar expand="lg" className="bg-custom">
                <Container style={{ width: '1440px', height: '80px' }}>
                    <Navbar.Brand href="#home">
                        <img src={Logo} alt="" style={{ width: '175px', height: '66px' }} />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto">
                            {navLink.map((link) => {
                                return (
                                    <div className='nav-link' key={link.id}>
                                        <NavLink to={link.path} className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "active" : ""
                                        } end>{link.text}</NavLink>
                                    </div>
                                );
                            })}
                        </Nav>
                        <div className="button">
                            <a
                                href="#">
                                Masuk
                            </a>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div >
    );
};

export default Navbarpage;