import './App.css';
import Menu from './components/menu/menu.js';
import { Routes, Route } from 'react-router-dom';
import Products from './pages/Products';
import ProductsDetail from './pages/ProductsDetail';
import Cart from './pages/Cart';



function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Menu></Menu>
      </header>

      <Routes>
        <Route path='/' element={<Products />} />
        <Route path='/product/:idProduct' element={<ProductsDetail />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
      
    </div>
  );
}

export default App;

