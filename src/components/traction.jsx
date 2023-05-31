import { Container, Row, Col } from './bootstrap-export';
import CountUp from 'react-countup/';

const Traction = () => {
  return (
    <div className='traction'>
      <Container>
        <Row>
          <Col className='traction-header'>
            <h1 className="text-center">Traction</h1>
            <p className='text-center'>Our products and investments grossed 1.1 billion in 2022</p>
          </Col>
        </Row>
        <Row>
          <Col className='traction-content'>
            <div>
              <p>Investment in <span>2022</span></p>
              <CountUp start={100} end={1100} duration={1800} delay={10} separator=","
                prefix="N" suffix='M' decimals={0} useEasing={false} enableScrollSpy={true} className='countUp' />M
            </div>
            <div>
              <p>Risk <span>Management</span></p>
              <CountUp start={100} end={0} duration={1800} delay={10}
                suffix='% RISK' decimals={0} useEasing={false} enableScrollSpy={true} className='countUp' />
            </div>
            <div>
              <p>Investment <span>paid back</span></p>
              <CountUp start={100} end={1100} duration={1800} delay={10} separator=","
                prefix="N" suffix='M' decimals={0} useEasing={false} enableScrollSpy={true} className='countUp' />M
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Traction;