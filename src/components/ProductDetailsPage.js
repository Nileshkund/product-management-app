import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductDetailsPage = ({ authToken, match }) => {
  const [product, setProduct] = useState(null);
  const productId = match.params.id;

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://dummyjson.com/docs/products/${productId}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Failed to fetch product', error);
      }
    };

    fetchProduct();
  }, [productId]);

  const handleDelete = async () => {
    try {
      await axios.delete(`https://dummyjson.com/docs/products/${productId}`);
      // Handle successful deletion (e.g., redirect to the home page)
    } catch (error) {
      console.error('Failed to delete product', error);
    }
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{product.name}</h2>
      <p>Price: {product.price}</p>
      <img src={product.image} alt={product.name} />
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default ProductDetailsPage;
