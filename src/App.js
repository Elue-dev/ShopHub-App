import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import { Home } from './components/Home';
import { Nav } from './components/Nav';
import { Cart } from './components/Cart';
import { ProductDetails } from './components/ProductDetails';
import { StoreProvider } from './context/StoreContext';
import { Footer } from './components/Footer';



function App() {
  return (
    <StoreProvider>
      <Router>
        <Nav />
        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/cart' element={<Cart />} />
            <Route path='/products/:id' element={<ProductDetails />} />
        </Routes>
        {/* <Footer /> */}
      </Router>
    </StoreProvider>
  );

}

export default App;
