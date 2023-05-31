<<<<<<< HEAD
import React from 'react'

const LandingPage = () => {
    return (
        <div>LandingPage</div>
    )
}

export default LandingPage
=======
import Transparency from './components/transparency';
import Footer from './components/footer'
import Header from './components/header';
import Main from './components/main';
import Product from './components/product';
import Invest from './components/invest';
import Access from './components/access';
import Testimonial from './components/testimonial';
import Web from './components/web';
import Traction from './components/traction';

const Landing = () => {
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

export default Landing;
>>>>>>> 1a3aff6df1e1602ac8dd40287aca1d56278eb76c
