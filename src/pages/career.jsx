import { Container, Row, Col } from '../components/bootstrap-export';
import Header from './../components/header';
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

const Career = () => {
    return (
        <div className='career bg-primary'>
            <Header />

            <Container fluid className='career-main'>
                <Row>
                    <Col>
                        <h1>Join us in shaping..</h1>
                    </Col>
                    <Col>
                        <h1>The Future..</h1>
                    </Col>
                    <Col>
                        <h1>Of Finance..</h1>
                    </Col>
                </Row>
            </Container>

            <Container fluid className='career-'>
                <Row>
                    <Col>
                    </Col>
                </Row>
            </Container>

            <Container fluid className='career-positions'>
                <h1>Open Positions</h1>
                <Row>
                    {careerPositions.map((position) => (
                        <Col key={position.id} className='d-flex flex-column justify-content-center gap-5' style={{ background: `url(${position.img})` }}>
                            <h3 className='text-dark'>{position.title}</h3>
                            <p className='text-dark'>Oh no...Position currently filled, check back later! To make sure you don't miss
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
        </div>
    )
}

export default Career;