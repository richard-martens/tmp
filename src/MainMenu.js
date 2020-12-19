import React from "react";
import { Nav, Navbar } from "react-bootstrap";

export default function App() {
    return (
        <Navbar bg="dark" expand="sm" variant="dark">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Startseite</Nav.Link>
                    <Nav.Link href="/galery">Galerie</Nav.Link>
                    <Nav.Link href="/order">Bestellen</Nav.Link>
                    <Nav.Link href="/about">Über mich</Nav.Link>
                    <Nav.Link href="/contact">Kontakt</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}