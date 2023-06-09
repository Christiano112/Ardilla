import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Nav, Navbar } from '../components/bootstrap-export';

// eslint-disable-next-line react/prop-types
const PopUp = ({ show, setShow }) => {
    if (!show) return null;

    return (
        <div className='landing-popup bg-white mx-auto p-5'>
            <button onClick={() => setShow(false)} className='text-dark border border-0 bg-transparent'>
                <img src="/assets/popup-back.svg" alt="back" className='me-2' />
                Go Back
            </button>
            <div className='landing-popup-content'>
                <img src="/assets/popup-img.svg" alt="valid check" className='img-fluid' />
                <h1>
                    <span className=''>
                        <img src="/assets/celebrate.svg" alt="cone" className='img-fluid me-2' />
                    </span>
                    Great!! You’re on the waitlist
                </h1>
                <p>An email would be sent to you in regards, Thank You</p>
                <img src="/assets/popup-social.svg" alt="social" />
            </div>
        </div>
    )
}

const LandingPage = () => {
    const [show, setShow] = React.useState(false);
    const [input, setInput] = React.useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setShow(true);
        setInput('');

        console.log({ 'email': input });

        setTimeout(() => {
            navigate('/home');
        }, 3000);
    }

    return (
        <div className='landing'>
            <PopUp show={show} setShow={setShow} />

            <Container fluid className='landing-top'>
                <Navbar expand="sm" variant='dark' collapseOnSelect>
                    <Container fluid>
                        <Navbar.Brand href="#">
                            <img src="/assets/logo.svg" alt="logo" />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ms-auto justify-end">
                                <Nav.Link href="/career" className='text-white text-decoration-none'>
                                    Features
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Row className='landing-top-content'>
                    <Col md={8} className='landing-top-main'>
                        <h1>Your  portal to more
                            <span><img src='/assets/landing-curve.svg' alt='curve' /></span>
                        </h1>
                        <p>Wealth building is possible. You just need the right partner. With better financial tools, Ardilla has made it so much easier for you to start
                            building wealth. Take advantage of the Ardilla platform by signing up with your email address.</p>
                        <form className="mb-3 landing-input rounded rounded-pill" onSubmit={handleSubmit}>
                            <input
                                placeholder="someone@example.com"
                                aria-label="someone@example.com"
                                aria-describedby="input"
                                type='email'
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                required
                            />
                            <button type='submit' id='input' className='rounded rounded-pill text-white'>
                                Access More
                                <span><img src='/assets/send-white-icon.svg' alt='send' className='ms-2' /></span>
                            </button>
                        </form>
                    </Col>
                    <Col md={4} className='landing-img'>
                        <img src="/assets/landing-hero.svg" alt="landing hero" className='img-fluid' />
                    </Col>
                </Row>
            </Container>
            <Container fluid className='landing-bottom'>
                <Row>
                    <Col className='landing-bottom-img'>
                        <img src="/assets/landing-expect.svg" alt="expect" className='img-fluid' />
                    </Col>
                </Row>
                <Row>
                    <Col className='d-none d-md-flex justify-content-end'>
                        <img src="/assets/next-circle.svg" alt="next" style={{ width: "3rem", height: "3rem" }} />
                    </Col>
                </Row>
                <Row>
                    <Col className='landing-img-scroll'>
                        <img src="/assets/landing-access.svg" alt="access" style={{ minHeight: "13rem", maxHeight: "14rem", marginBottom: "-2rem" }} />
                        <img src="/assets/landing-invest.svg" alt="invest" style={{ maxHeight: "11rem" }} />
                        <img src="/assets/landing-savings.svg" alt="savings" style={{ maxHeight: "11rem" }} />
                        <img src="/assets/landing-community.svg" alt="community" style={{ maxHeight: "11rem" }} />
                        <img src="/assets/landing-finance.svg" alt="finance" style={{ maxHeight: "11rem" }} />
                        <img src="/assets/landing-build.svg" alt="build" style={{ maxHeight: "11rem" }} />
                        <img src="/assets/landing-budget.svg" alt="budget" style={{ maxHeight: "11rem" }} />
                        <img src="/assets/landing-id.svg" alt="id" style={{ maxHeight: "11rem" }} />
                    </Col>
                </Row>
                <Row>
                    <Col className='d-flex flex-column justify-content-between gap-2 gap-md-4 align-items-start align-items-md-center flex-md-row'>
                        <p className='text-primary'>© 2023 Ardilla. All right reserved</p>
                        <img src="/assets/landing-social.svg" alt="social" />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default LandingPage;