import React, { PureComponent } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
class DatNav extends PureComponent {
    render() {
        return (
            <Navbar className="navcss" bg="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Wither</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">About</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar >
        )
    }
}
export default DatNav