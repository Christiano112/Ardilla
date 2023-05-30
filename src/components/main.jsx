import Header from "./header";
import { Container, Row, Col } from './bootstrap-export';

const Main = () => {
    return (
        <main className="bg-secondary">
            <Header />

            <Container>
                <Row>
                    <Col className="hero-text">
                        <h1>Your Access To More</h1>
                        <p>Ardilla helps you save and invest in achieving your financial goals,
                            we have the most flexible and seamless way to grow your funds.</p>
                        <button className="rounded rounded-pill">Get Started</button>
                    </Col>
                </Row>

                <Row>
                    <Col className="hero-img">
                        <img src="/assets/hero-phone.svg" alt="hero-mobile" className="img-fluid" />
                    </Col>
                </Row>
            </Container>
        </main>
    )
}

export default Main;