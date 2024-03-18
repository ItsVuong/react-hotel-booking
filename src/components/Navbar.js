import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

import "./navbar.css"

function MyNavbar() {
    return (

        <Navbar expand="lg" bsClass='navbar'>
            <Container>
                <Navbar.Brand href="#home" >VNTravel</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className='justify-content-between'>
                    <Nav className="me-auto" >
                        <Nav.Link href="#home" >Trang chủ</Nav.Link>
                        <Nav.Link href="#about" >Giới thiệu</Nav.Link>
                        <Nav.Link href="#Hotel" >Lưu trú</Nav.Link>
                        <Nav.Link href="#Place" >Địa điểm du lịch</Nav.Link>
                    </Nav>
                    <Nav className='headerButton'> 
                        <Button variant="light" >Login</Button>
                        <Button variant="light">Signup</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default MyNavbar