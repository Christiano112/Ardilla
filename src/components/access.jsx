import { Container, Row, Col } from './bootstrap-export';

const accessContent = [
  {
    id: 1,
    img: '/assets/dib.svg',
    title: 'DIB',
    text: 'Nothing beats an emergency quite like an emergency fund. With Ardilla you can get started building that emergency fund.',
  },
  {
    id: 2,
    img: '/assets/dream.svg',
    title: 'Dreams ',
    text: 'Helping you make your dreams a reality is important to us. We have helped so many others. We can help you as well.',
  },
  {
    id: 3,
    img: '/assets/vault.svg',
    title: 'Vault',
    text: "Lock away excess funds you don't know what to do with.We can help you safeguard it till you are ready.It definitely beats spending it and wondering where all that money went to.",
  },
  {
    id: 4,
    img: '/assets/grit.svg',
    title: 'Grit',
    text: 'Become a VIP when you save more money with us. Enjoy better benefits.',
  },
]

const Access = () => {
  return (
    <div className='access'>
      <Container>
        <Row>
          <Col className='access-header'>
            <h1>Access More With Your Money</h1>
            <p>Earn, learn, parlay, and grow financially. With Ardilla,
              you have more opportunities than ever at your finger tips. Why not take advantage today?</p>
            <button className='rounded rounded-pill'>
              <span>Learn more about savings</span>
              <img src="/assets/send-white-icon.svg" alt="send icon" />
            </button>

            <Row className='access-content'>
              {accessContent.map((item) => (
                <Col key={item.id} className='access-content-item'>
                  <img src={item.img} alt={item.title} />
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <button className='rounded rounded-pill'>Learn More</button>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Access;