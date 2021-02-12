import React, { PureComponent } from 'react'
import { Navbar, Nav, Form, FormControl, Button, Container } from 'react-bootstrap'
import { fetchFunc } from '../fetch.js'
class DatNav extends PureComponent {
    state = {
        city: ""
    }
    onChangeHandler = (e) => {
        this.setState({
            city: e.currentTarget.value
        });
    };
    refreshHandler = (e) => {
        e.preventDefault(e)
    }

    realfetchFunc = async () => {
        const res = await fetchFunc(false, this.state.city)
        this.setState({ city: res })
    }

    render() {
        const { city } = this.state
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
                        <Form inline>
                            <FormControl
                                onChange={(e) => this.onChangeHandler(e)}
                                value={city.name}
                                type="text"
                                placeholder="Search"
                                className="mr-sm-2 formcss1" />
                            <Button onClick={this.realfetchFunc} onKeyDown={(e) => this.refreshHandler(e)} className="buttoncss1">Search for a city</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar >
        )
    }
}
export default DatNav