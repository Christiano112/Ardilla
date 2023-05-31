import { Container, Row, Col } from './bootstrap-export';

const Invest = () => {
    return (
        <div className='invest'>
            <Container>
                <Row>
                    <Col className="hero-text">
                        <h1>Unlimited <span>Investment Opportunities </span></h1>
                        <p>Plan towards your future by investing with ardilla,
                            Grow your money confidently and securely with the available investment oppurtuinities  </p>
                        <button className='rounded rounded-pill'>
                            Invest with ardilla (Coming Soon)
                            <img src="/assets/send-purple.svg" alt="send icon" className='ms-2' />
                        </button>
                        <img src="/assets/two-arrow.svg" alt="arrow" className='img-fluid align-self-end invest-img' />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Invest;