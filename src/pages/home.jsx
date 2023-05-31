import Header from '../components/header';
import Main from '../components/main';
import Product from '../components/product';
import Transparency from '../components/transparency';
import Invest from '../components/invest';
import Access from '../components/access';
import Testimonial from '../components/testimonial';
import Web from '../components/web';
import Traction from '../components/traction';
import Footer from '../components/footer'

const Home = () => {
    return (
        <div className='bg-secondary'>
            <Header />
            <Main />
            <Product />
            <Transparency />
            <Invest />
            <Access />
            <Testimonial />
            <Web />
            <Traction />
            <Footer />
        </div>
    )
}

export default Home;