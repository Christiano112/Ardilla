import { Nav, Navbar, NavDropdown, Container } from './bootstrap-export';

const Header = () => {
    return (
        <header>
            <Navbar expand="md" variant='dark' collapseOnSelect>
                <Container fluid>
                    <Navbar.Brand href="#">
                        <img src="/assets/logo.svg" alt="logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto d-flex gap-2 gap-md-4 justify-content-between align-items-center align-content-md-center">
                            <NavDropdown title="Products" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/product">Products</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#">Business <span className='border rounded'>BETA</span></Nav.Link>
                            <NavDropdown title="Company" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/career">Company</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#">Learn</Nav.Link>
                        </Nav>
                        <Nav className='justify-end d-flex gap-2 gap-md-4 justify-content-between align-items-center align-content-md-center'>
                            <Nav.Link href="#">Sign in</Nav.Link>
                            <Nav.Link href="#" className='bg-primary rounded rounded-pill p-2'>Create Account</Nav.Link>
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