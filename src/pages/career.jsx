import { Container, Row, Col, Nav, Navbar, NavDropdown } from '../components/bootstrap-export';
import Footer from './../components/footer';

const careerPositions = [
    {
        id: 1,
        title: 'Design',
        img: '/assets/career-design-bg.svg',
    },
    {
        id: 2,
        title: 'Engineering',
        img: '/assets/career-engineering-bg.svg',
    },
    {
        id: 3,
        title: 'Content Writer',
        img: '/assets/career-writer-bg.svg',
    },
    {
        id: 4,
        title: 'Financial Advisor',
        img: '/assets/career-advisor-bg.svg',
    }
];

const careerPerks = [
    {
        id: 1,
        title: 'Its a vibe',
        text: 'Our work culture is a vibe and more.',
        img: '/assets/career-vibe.svg',
    },
    {
        id: 2,
        title: 'Cool gadgets',
        text: 'You get to work with cool new gadgets.',
        img: '/assets/career-gadget.svg',
    },
    {
        id: 3,
        title: 'Health benefits',
        text: 'We know health is important. So we provided easy access and affordable health benefits.',
        img: '/assets/career-health.svg',
    },
    {
        id: 4,
        title: 'Team Bounding',
        text: 'We always make out time for fun and getting to know your team mates better.',
        img: '/assets/career-team.svg',
    },
    {
        id: 5,
        title: 'Diversity',
        text: 'We promote diversity of ideas and people. Anyone from anywhere is welcome.',
        img: '/assets/career-diverse.svg',
    },
    {
        id: 6,
        title: 'Education and career progression',
        text: 'We offer you opportunities to grow, learn, and advance in your career.',
        img: '/assets/career-education.svg',
    },
];

const Career = () => {
    return (
        <div className='career bg-primary'>
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
                                    <NavDropdown.Item href="/interest">Interest</NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link href="#">Business <span className='border rounded'>BETA</span></Nav.Link>
                                <NavDropdown title="Company" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="/career">Career</NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link href="/">Learn</Nav.Link>
                            </Nav>
                            <Nav className='justify-end d-flex gap-2 gap-md-4 justify-content-between align-items-center align-content-md-center'>
                                <Nav.Link href="#">Sign in</Nav.Link>
                                <Nav.Link href="#" className='bg-white text-primary rounded rounded-pill p-2 create-account'>Create Account</Nav.Link>
                                <Nav.Link href="#">
                                    <img src="/assets/world.svg" alt="search" />
                                    <img src="/assets/down-arrow.svg" alt="arrow" />
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>

            <Container fluid className='career-main'>
                <Row className='justify-content-start'>
                    <Col sm={10} style={{ background: "#F59E0B", paddingTop: "3rem", borderRadius: "6px" }}>
                        <h1>Join us in shaping..</h1>
                    </Col>
                </Row>
                <Row className='justify-content-end'>
                    <Col sm={4}>{""}</Col>
                    <Col sm={8} style={{ background: "#E8356D", paddingTop: "3rem", borderRadius: "6px" }}>
                        <h1>The Future..</h1>
                    </Col>
                </Row>
                <Row className='justify-content-start'>
                    <Col sm={8} style={{ background: "#0D9488", paddingTop: "3rem", borderRadius: "6px" }}>
                        <h1>Of Finance..</h1>
                    </Col>
                    <Col sm={4}>{""}</Col>
                </Row >
            </Container >

            <Container fluid className='career-culture'>
                <h1>The Ardilla Culture</h1>
                <Row className='career-culture-pics'>
                    <Col>
                        <img src="/assets/career-girl.svg" alt="girl" className='img-fluid' />
                    </Col>
                    <Col className='d-flex flex-column gap-2 justify-content-center align-items-center'>
                        <img src="/assets/career-girl-smile.svg" alt="smiling girl" className='img-fluid' />
                        <img src="/assets/career-man.svg" alt="man" className='img-fluid' />
                    </Col>
                    <Col>
                        <img src="/assets/career-girl-sit.svg" alt="girl sitting" className='img-fluid' />
                    </Col>
                </Row>
                <Row className='d-flex flex-column gap-5 flex-md-row justify-content-center'>
                    <Col>
                        <h5>Experienced professionals</h5>
                        <p>Experienced financial analysts and coaches. Who have been vetted and have a wealth of experience.
                            They will guide you through your wealth-building journey.</p>
                        <p>We have a great team of diverse and talented professionals who share the values of the company.
                            Because of the size of our dream, we need more hands on deck and you are always welcome to apply.</p>
                    </Col>
                    <Col>
                        <h5>We give the best</h5>
                        <p>We know work can be quite dreadful, so we try to make it fun, as much as we can. We also offer competitive salaries as well as great packages.</p>
                        <p>At Ardilla, dedication and excellence are always rewarded. No politics and no funny business.</p>
                    </Col>
                </Row>
            </Container>

            <Container fluid className='career-values'>
                <h1>Our Values</h1>
                <p>At Ardilla, our mission is to help people across the continent build wealth
                    and achieve well thought out financial goals. However, we cannot do it alone.</p>
                <Row>
                    <Col>
                        <h3>Excellence</h3>
                        <p>We always bring our A game to work, putting our best foot forward.</p>
                    </Col>
                    <Col>
                        <h3>Dedication</h3>
                        <p>Consistency is the code to turning dreams to reality and at Ardilla, we have a lot of dreams to transform.</p>
                    </Col>
                    <Col>
                        <h3>Team Work</h3>
                        <p>No one ever built anything alone. Strength in numbers is all good but more importantly is strength in working together.</p>
                    </Col>
                    <Col>
                        <h3>Positivity</h3>
                        <p>Great attitude to work always wins and at Ardilla we are always big on positivity and a can do mindset.</p>
                    </Col>
                </Row>
            </Container>

            <Container fluid className='career-people'>
                <h1>People are what matters </h1>
                <Row>
                    <Col>
                        <img src="/assets/girl-text.svg" alt="girl" className='img-fluid w-100' style={{ maxHeight: "15rem" }} />
                        <p>Working with Ardilla has exposed me to innovative ideas and advanced technology.</p>
                    </Col>
                    <Col>
                        <img src="/assets/girl-text.svg" alt="girl" className='img-fluid w-100' style={{ maxHeight: "15rem" }} />
                        <p>Ardilla places a premium on team work and collaboration which has helped me gain better insights and become better at my job</p>
                    </Col>
                    <Col>
                        <img src="/assets/girl-text.svg" alt="girl" className='img-fluid w-100' style={{ maxHeight: "15rem" }} />
                        <p>At Ardilla, I get to work in an environment that is constantly pushing me to learn, develop, and be better.</p>
                    </Col>
                    <Col>
                        <img src="/assets/girl-text.svg" alt="girl" className='img-fluid w-100' style={{ maxHeight: "15rem" }} />
                        <p>Although Ardilla is challenging, it is the type of challenge that gets you motivated.</p>
                    </Col>
                </Row>
            </Container>


            <Container fluid className='career-perks'>
                <h2>Beyond a competitive salary, we offer so much more in support and necessary
                    tools needed to get the best results.</h2>
                <Row>
                    <h1>Perks</h1>
                    <Col className='career-peeks-footer'>
                        <Row className=''>
                            {careerPerks.map((perk) => (
                                <Col key={perk.id}>
                                    <img src={perk.img} alt={perk.title} className='img-fluid' />
                                    <h5>{perk.title}</h5>
                                    <p>{perk.text}</p>
                                </Col>
                            ))}
                        </Row>
                    </Col>
                </Row>
            </Container>

            <Container fluid className='career-positions'>
                <h1>Open Positions</h1>
                <Row>
                    {careerPositions.map((position) => (
                        <Col key={position.id} className='d-flex flex-column justify-content-center gap-5' style={{ background: `url(${position.img})` }}>
                            <h3 className='text-dark'>{position.title}</h3>
                            <p className='text-dark'>Oh no...Position currently filled, check back later! To make sure you don{`'`}t miss
                                any update subscribe to our newsletter.</p>
                            <h6 className='text-dark'>Position Closed</h6>
                        </Col>
                    ))}
                </Row>
                <img src='/assets/career-arrows.svg' alt='prev and next' />
            </Container>

            <Container fluid className='career-hire'>
                <h1>How We Hire</h1>
                <Row className='d-flex flex-column flex-md-row gap-5 justify-content-center align-items-center'>
                    <Col>
                        <img src="/assets/application-edit.svg" alt="application" className='img-fluid' />
                        <h3>Application</h3>
                        <p>Send in your applications and if you are a good fit, we will schedule an interview.</p>
                    </Col>
                    <Col>
                        <img src="/assets/hire-interview.svg" alt="interview" className='img-fluid' />
                        <h3>Hiring Managers Interview</h3>
                        <p>The interview comprises a chat or two with the hiring manager and your department
                            team lead about your suitability and skills for the role.</p>
                    </Col>
                    <Col>
                        <img src="/assets/feedback.svg" alt="feedback" className='img-fluid' />
                        <h3>Feedback</h3>
                        <p>When the process is complete, we give you feedback on your performance and we let you
                            know if you have been selected.</p>
                    </Col>
                </Row>
            </Container>

            <Container fluid className='career-footer-pic bg-white'>
                <Row>
                    <Col>
                        <img src="/assets/career-footer-pic.svg" alt="guy" className='img-fluid' />
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div >
    )
}

export default Career;