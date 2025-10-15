import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

import Hero from './components/hero';
import Navbar from './components/navbar';
import Showcase from './components/showcase';
import ProductViewer from './components/product-viewer';
import Performance from './components/performance';
import Features from './components/features';
import Highlights from './components/highlights';
import Footer from './components/footer';

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <ProductViewer />
      <Showcase />
      <Performance />
      <Features />
      <Highlights />
      <Footer />
    </main>
  );
};

export default App;
