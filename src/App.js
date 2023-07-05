import React, { useState } from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import HomePage from './components/HomePage';
import ProductDetailsPage from './components/ProductDetailsPage';
import NewProductPage from './components/NewProductPage';

const App = () => {
  const [authToken, setAuthToken] = useState('');

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/new-product">Add Product</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" exact element={authToken ? (
              <HomePage authToken={authToken} />
            ) : (
              <LoginPage setAuthToken={setAuthToken} />
            )}>
            
          </Route>
          <Route path="/new-product" exact element={<NewProductPage authToken={authToken} />}>
            
          </Route>
          <Route path="/products/:id" exact element={<ProductDetailsPage/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;