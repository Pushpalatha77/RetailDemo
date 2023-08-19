import React, { useContext, useEffect, useState } from 'react';
import { ProductContext } from '../../context/ProductContext';
import axios from 'axios';

export const ProductList = () => {
  const productsContext = useContext(ProductContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch the list of products from your API or context
    axios.get("http://localhost:2000/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, []); // The empty dependency array ensures this effect runs only once when the component mounts

  return (
    <div>
      <h2>Product List</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Id</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td>{product.id} </td>
              <td>{product.name} </td>
              <td>{product.price}</td>
              {/*<td><Link to={`editProduct/${product.id}`}> Edit </Link></td>*/}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
