import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';
import './App.css';
import Header from './Containers/Header';
import ProductDetails from './Containers/ProductDetails';
import ProductListing from './Containers/productListings';

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<ProductListing />} />
      <Route path="/product/:productid" element={<ProductDetails />} />
      <Route>404 Not Found</Route>
    </Routes>
  </Router>
)

export default App;
