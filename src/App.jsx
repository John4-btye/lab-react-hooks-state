import React, { useState } from 'react';
import DarkModeToggle from './components/DarkModeToggle';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

function App() {
  // TODO: Implement state for dark mode toggle
  const [darkMode, setDarkMode] = useState(false);

  // TODO: Implement state for cart management
  const [cart, setCart] = useState([]);

  // TODO: Implement state for category filtering
  const [category, setCategory] = useState('All');

  // TODO: Implement addToCart 
  const addToCart = (productName) => {
    setCart([...cart, productName]);
  };

  // TODO: Implement state for category filtering
  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  return (
    <div className={darkMode ? "dark" : "light"}>
      <h1>Grocery App</h1>

      {/* TODO: Render DarkModeToggle and implement dark mode functionality */}
      <DarkModeToggle
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      {/* TODO: Implement category filter dropdown */}
      <select onChange={handleCategoryChange} value={category}>
        <option value="All">All</option>
        <option value="Dairy">Dairy</option>
        <option value="Fruits">Fruits</option>
        <option value="Bakery">Bakery</option>
      </select>

      <ProductList 
        addToCart={addToCart}
        category={category}
      />

      <Cart cart={cart} />
    </div>
  );
}

export default App;
