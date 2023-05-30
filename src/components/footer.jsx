import { Container, Row, Col } from './bootstrap-export';

const Footer = () => {
    return (
        <footer className='bg-primary footer'>
            <Container>
                <Row>
                    <Col>
                        <h6>Products</h6>
                        <a href="#">Savings</a>
                        <a href="#">Dills</a>
                        <a href="#">Financial Coach</a>
                        <a href="#">Halal</a>
                        <a href="#">Budgeting <span>Coming Soon</span></a>
                        <a href="#">Investment <span>Coming Soon</span></a>
                        <a href="#">Insurance <span>Coming Soon</span></a>
                    </Col>
                    <Col>
                        <h6>Company</h6>
                        <a href="#">About Us</a>
                        <a href="#">Careers</a>
                        <a href="#">FAQ</a>
                        <a href="#">Press</a>
                    </Col>
                    <Col>
                        <h6>Transparency</h6>
                        <a href="#">Terms & Condition</a>
                        <a href="#">Information security policy</a>
                        <a href="#">Privacy policy</a>
                        <a href="#">Interest Tool</a>
                    </Col>
                    <Col>
                        <h6>Developer</h6>
                        <a href="#">Connect API <span>Coming Soon</span></a>
                    </Col>
                    <Col>
                        <h6>Address</h6>
                        <a href="#">33B, Ogundana street, Allen, Ikeja.</a>
                        <Col>
                            <h6>Contact</h6>
                            <a href="#">support@ardilla.africa</a>
                            <a href="#">(234)801 000 1234</a>
                        </Col>
                    </Col>
                </Row>
                <hr />
                <div className='footer-bottom'>
                    <div className='footer-bottom-text'>
                        <p>© 2023 Ardilla. All right reserved</p>
                        <p>Ardilla operates under the coorperative license of Ardilla Multipurpose Cooperative Society,
                            LSC 18245, We provide Savings and Fixed deposit services to our users</p>
                    </div>
                    <div className='footer-bottom-img'>
                        <img src="/assets/instagram.svg" alt="ig icon" />
                        <img src="/assets/facebook.svg" alt="facebook icon" />
                        <img src="/assets/linkedin.svg" alt="linkedin icon" />
                        <img src="/assets/twitter.svg" alt="twitter icon" />
                    </div>
                </div>
            </Container>
        </footer>
    )
}

export default Footer;