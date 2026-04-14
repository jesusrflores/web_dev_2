import Home from "./Home";
import About from "./About";
import Products from "./Products";
import MyForm from "./MyForm";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function MyNav() {
    return (
        <BrowserRouter>
            <SetNav />
            <Routes>
                <Route path="/Home" element={<Home />} />
                <Route path="/About" element={<About />} />
                <Route path="/Products" element={<Products />} />
                <Route path="/form" element={<MyForm />} />
            </Routes>
        </BrowserRouter>
    );
}

function SetNav() {
    return (
        <Navbar expand="lg" bg="light" data-bs-theme="dark" className = "bg-body-tertiary">
            <Container>
                <Navbar.Brand as={Link} to="/home">Puma-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/products">Products</Nav.Link>
                        <Nav.Link as={Link} to="/form">Form</Nav.Link>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default MyNav;