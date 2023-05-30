import Transparency from './components/transparency';
import Footer from './components/footer'
import FooterTop from './components/footer-top';
import Main from './components/main';
import Product from './components/product';

function App() {

  return (
    <div className='bg-secondary'>
      <Main />
      <Product />
      <Transparency />
      <Footer />
      <FooterTop />
    </div>
  )
}

export default App;
