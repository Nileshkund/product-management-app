import React, { useState } from 'react';
import axios from 'axios';

const NewProductPage = ({ authToken }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');

  const handleAddProduct = async (e) => {
    e.preventDefault();

    const newProduct = {
      name,
      price,
      image,
      // Include any other required fields
    };

    try {
      await axios.post('https://dummyjson.com/docs/products', newProduct);
      // Handle successful product creation (e.g., redirect to the home page)
    } catch (error) {
      console.error('Failed to add product', error);
    }
  };

  return (
    <div>
      <h2>Add Product</h2>
      <form onSubmit={handleAddProduct}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default NewProductPage;
