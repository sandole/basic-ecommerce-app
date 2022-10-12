import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Products from './pages/Products';
import Addproduct from './pages/Addproduct';
import Aboutproduct from './pages/Aboutproduct';
import ProductDetails from './components/ProductDetails';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="row">
        {/* da keda al sidebar ya 7ag 3ega */}
        <div className="col-2">
          <Sidebar />
        </div>
        {/* da keda al pages aly hatt3'er */}
        <div className="col-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="products" element={<Products />} />
            <Route path="product/add" element={<Addproduct />} />
            <Route path="product/:prodectid" element={<ProductDetails />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
