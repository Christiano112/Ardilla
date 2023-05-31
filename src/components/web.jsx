import { Container, Row, Col } from './bootstrap-export';

const Web = () => {
  return (
    <div className='web'>
      <Container>
        <Row>
          <Col className='web-header'>
            <img src="/assets/zikoko.svg" alt="zikoko" className='img-fluid' />
            <img src="/assets/techCrunch.svg" alt="techcrunch" className='img-fluid' />
            <img src="/assets/theGuardian.svg" alt="guardian" className='img-fluid' />
            <p>Press reviews</p>
          </Col>
          <Col className='web-footer'>
            <h3>Also Available on the Web</h3>
            <p>Increase your bread & butter on the app or on the web.The Ardilla app services are also available on the web.</p>
            <img src="/assets/main-frame.svg" alt="main-frame" className='img-fluid' />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Web;