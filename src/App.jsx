import Hero from './components/hero';
import Navbar from './components/navbar';
import ProductViewer from './components/product-viewer';

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <ProductViewer />
    </main>
  );
};

export default App;
