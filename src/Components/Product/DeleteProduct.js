import React, { useContext, useState } from 'react';
import axios from 'axios';
import { ProductContext } from '../../context/ProductContext';

export const DeleteProduct = () => {
  const [productId, setProductId] = useState('');
  const products = useContext(ProductContext);

  const handleDelete = () => {
    if (!productId) {
      alert('Please enter a product ID to delete.');
      return;
    }

    axios
      .delete(`http://localhost:2000/products/${productId}`)
      .then((response) => {
        // Handle success, e.g., remove the deleted product from the context or update the product list.
        console.log(`Product with ID ${productId} deleted successfully.`);
        // You might want to update the products context here.
      })
      .catch((error) => {
        // Handle errors, e.g., show an error message.
        console.error('Error deleting product:', error);
      });

    // Clear the input field after deletion.
    setProductId('');
  };

  return (
    <div>
      <h2>Delete Product</h2>
      <label>Product ID</label>
      <input
        type="number"
        value={productId}
        onChange={(e) => setProductId(e.target.value)}
      />
      <button onClick={handleDelete}>Delete Product</button>
    </div>
  );
};
