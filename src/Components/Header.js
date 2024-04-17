import React, { Component } from "react";
import {
    Navbar,
    Nav,
    Container,
    Button
} from "react-bootstrap";
import logo from "./logo192.png";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Main from '../pages/Main';
import About from '../pages/About';
import Contacts from '../pages/Contacts';
import Blog from '../pages/Blog';
import styled from "styled-components";

const Styles = styled.div`
    a, .navbar-brand, navbar-nav .nav-link {
        color: #adb1b8;
        &:hover {
            color: white
        }
    }
`
export default class Header extends Component {
    render() {
        return (
            <>
                <Styles>
                    <Navbar sticky="top" collapseOnSelect expand="md" bg="dark" variant="dark" >
                        <Container>
                            <Navbar.Brand href="/">
                                <img
                                    src={logo}
                                    height="30"
                                    width="30"
                                    className="d-inline-block align-top"
                                    alt="Logo"
                                /> Ремонт
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="mr-auto">
                                    <Nav.Link href="/"> Главная </Nav.Link>
                                    <Nav.Link href="/about"> About us </Nav.Link>
                                    <Nav.Link href="/contacts"> Контакты </Nav.Link>
                                    <Nav.Link href="/blog"> Blog </Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                            <Button href="/" variant="outline-info"> Личный кабинет </Button>
                        </Container>
                    </Navbar>
                </Styles>
                <Router>
                    <Routes>
                        <Route exact path="/" element={<Main />} />
                        <Route exact path="/about" element={<About />} />
                        <Route exact path="/contacts" element={<Contacts />} />
                        <Route exact path="/blog" element={<Blog />} />
                    </Routes>
                </Router>
            </>
        );
    }
}
