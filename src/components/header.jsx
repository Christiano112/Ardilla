import { Nav, Navbar, NavDropdown, Container } from './bootstrap-export';

const Header = () => {
    return (
        <header>
            <Navbar bg="secondary" expand="md">
                <Container>
                    <Navbar.Brand href="#">
                        <img src="/assets/logo.svg" alt="logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavDropdown title="Products" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Products</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#">Business <span>BETA</span></Nav.Link>
                            <NavDropdown title="Company" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Company</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#">Learn</Nav.Link>
                        </Nav>
                        <Nav className='justify-end'>
                            <Nav.Link href="#">Sign in</Nav.Link>
                            <Nav.Link href="#" className='bg-primary rounded rounded-pill'>Sign up</Nav.Link>
                            <Nav.Link href="#">
                                <img src="/assets/world.svg" alt="search" />
                                <img src="/assets/down-arrow.svg" alt="arrow" />
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header;