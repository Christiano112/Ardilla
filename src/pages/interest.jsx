import { Container, Row, Col, Accordion } from '../components/bootstrap-export';
import InterestHeader from "../components/interest-header";
import Footer from './../components/footer';

const Interest = () => {
    return (
        <div className='interest'>
            <InterestHeader />

            <Container className='interest-count'>
                <h3>Interest you can count on</h3>
                <Row>
                    <Col>
                        <div>
                            <h6>
                                <span><img src='/assets/purple-circle.svg' alt='circle' /></span> More Interest</h6>
                            <p>Enjoy better interest rates than the average bank account when you
                                save with any of the Ardilla savings plan.</p>
                        </div>
                        <div>
                            <h6>
                                <span><img src='/assets/purple-circle.svg' alt='circle' /></span> More Values</h6>
                            <p>Your values matter to us and we are 100% committed to upholding those. Whether it is with Halal or the Ardilla saving plans.</p>
                        </div>
                        <div>
                            <h6>
                                <span><img src='/assets/purple-circle.svg' alt='circle' /></span> MoreTransparency</h6>
                            <p>No hidden charges and no vague deductions. Save with Ardilla and get your full interests.</p>
                        </div>
                        <div>
                            <h6>
                                <span><img src='/assets/purple-circle.svg' alt='circle' /></span> MoreComplete Withdraws</h6>
                            <p>Withdraw your entire savings+ interest upon maturity. No minimum balance.</p>
                        </div>
                    </Col>
                </Row>
            </Container>

            <Container className='interest-work'>
                <h3>How It Works</h3>
                <Row>
                    <Col>
                        <div>
                            <h6>
                                <span style={{ background: "#E8356D" }}>1</span> Create a plan
                            </h6>
                            <img src='/assets/create-plan.svg' alt='Save' className='img-fluid' />
                        </div>
                        <div>
                            <h6>
                                <span style={{ background: "#8807F7" }}>2</span> Set your target amount
                            </h6>
                            <img src='/assets/DIB-target.svg' alt='DIB' className='img-fluid' />
                        </div>
                        <div>
                            <h6>
                                <span style={{ background: "#2563EB" }}>3</span> Get Your interest
                            </h6>
                            <img src='/assets/breakdown.svg' alt='Breakdown' className='img-fluid' />
                        </div>
                    </Col>
                </Row>
            </Container>

            <Container className='interest-question'>
                <h3>Questions We Have been Asked</h3>
                <Row>
                    <Col>
                        <Accordion>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header style={{ color: "##8807F7" }}>What are your interest rates?</Accordion.Header>
                                <Accordion.Body style={{ color: "#240053" }}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header style={{ color: "##8807F7" }}>What happens to my interest when i switch to Halal?</Accordion.Header>
                                <Accordion.Body style={{ color: "#240053" }}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header style={{ color: "##8807F7" }}>What is the minimum interest rate I am entitled to?</Accordion.Header>
                                <Accordion.Body style={{ color: "#240053" }}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header style={{ color: "##8807F7" }}>What is Ardilla</Accordion.Header>
                                <Accordion.Body style={{ color: "#240053" }}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4">
                                <Accordion.Header style={{ color: "##8807F7" }}>What is Ardilla</Accordion.Header>
                                <Accordion.Body style={{ color: "#240053" }}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                </Row>
            </Container>

            <Footer />
        </div>
    )
}

export default Interest;