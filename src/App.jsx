import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

import Hero from './components/hero';
import Navbar from './components/navbar';
import Showcase from './components/showcase';
import ProductViewer from './components/product-viewer';

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <ProductViewer />
      <Showcase />
    </main>
  );
};

export default App;
