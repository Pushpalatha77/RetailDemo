import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // If using React Router for routing
import axios from 'axios';

export const ProductDetails = () => {
  const { productId } = useParams(); // If you're using React Router for routing
  // You can also get the product ID through props or any other method depending on your app's setup
  // const productId = ...;

  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Fetch the product details by ID from your API
    axios.get(`http://localhost:2000/products/${productId}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.error('Error fetching product details:', error);
      });
  }, [productId]); // Dependency array includes productId to re-fetch data when the ID changes

  if (!product) {
    return <div>Loading...</div>; // You can display a loading indicator while fetching data
  }

  return (
    <div>
      <h2>Product Details</h2>
      <div>
        <strong>Name:</strong> {product.name}
      </div>
      <div>
        <strong>Price:</strong> {product.price}
      </div>
      <div>
        <strong>ID:</strong> {product.id}
      </div>
      {/* Add more product details as needed */}
    </div>
  );
};
