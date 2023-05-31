import { Container, Row, Col } from './bootstrap-export';

const Testimonial = () => {
  return (
    <div className='testimonial'>
      <Container>
        <Row>
          <Col>
            <h1>Don’t Take Our <span>Word</span> For It</h1>
            <p>Listen to testimonials from Ardilla users building wealth</p>
          </Col>
        </Row>
        <Row>
          <Col className='testimonial-images'>
            <img src="/assets/girl-text.svg" alt="girl" className='img-fluid' style={{ maxWidth: '100%', maxHeight: '18rem' }} />
            <img src="/assets/man.svg" alt="man" className='img-fluid' style={{ maxWidth: '100%', maxHeight: '15rem' }} />
            <img src="/assets/man-black.svg" alt="male" className='img-fluid' style={{ maxWidth: '100%', maxHeight: '15rem' }} />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Testimonial;