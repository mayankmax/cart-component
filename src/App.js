import './App.css';
import { Product } from './components/product';
import  { CartContextProvider } from './context/cartcontext';

import { Cart } from './components/cart-component';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  // const [cartItem, setCartItem] = useState({});

  return (
    
      <Router>
      <CartContextProvider>
        <Routes>
          <Route exact path='/' element={<Product />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
        </CartContextProvider>
      </Router>
   
  );
}

export default App;
