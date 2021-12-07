import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useContext } from 'react'
import './App.css';
import { Home } from './components/Home';
import { Nav } from './components/Nav';
import { Cart } from './components/Cart';
import { ProductDetails } from './components/ProductDetails';
import { StoreProvider } from './context/StoreContext';
import { Checkout } from './components/Checkout';

function App() {
  return (
    <StoreProvider>
      <Router>
        <Nav />
        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='/products/:id' element={<ProductDetails />} />
        </Routes>
      </Router>
    </StoreProvider>
  );

}

export default App;
