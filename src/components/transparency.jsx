import { Container, Row, Col, Form } from './bootstrap-export';

const Transparency = () => {
    return (
        <div className='transparency'>
            <Container>
                <Row>
                    <Col>
                        <h1>We’re Keen On <span>Transparency</span></h1>
                        <p>Calculate your interests everytime you save on our platform</p>
                        <button className="rounded rounded-pill">Get Started</button>
                    </Col>
                    <Col className='calculator'>
                        <h2>Calculate Your Interests</h2>
                        <Row>
                            <Col className='calculator-form'>
                                <Form className='d-flex flex-column gap-4'>
                                    <Form.Group className="mb-3" controlId="formGroupPlan">
                                        <Form.Label>How often are you saving?</Form.Label>
                                        <Form.Select aria-label="Default select example" className='bg-transparent custom-select'>
                                            <option value="1" selected>Monthly</option>
                                            <option value="2">Weekly</option>
                                            <option value="3">Daily</option>
                                        </Form.Select>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formGroupAmount">
                                        <Form.Label>How much are you saving?</Form.Label>
                                        <Form.Control type="number" placeholder="2000" className='bg-transparent border-0 border-bottom rounded-0 border-white' />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formGroupDuration">
                                        <Form.Label>How long are you saving for? (In months)</Form.Label>
                                        <Form.Control type="number" placeholder="3" className='bg-transparent border-0 border-bottom rounded-0 border-white' />
                                    </Form.Group>
                                </Form>
                            </Col>
                            <Col className='calculator-graph'>
                                <img src='/assets/calculator-result.svg' alt='calculator-result' className='img-fluid' />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Transparency;