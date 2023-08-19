import React, { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { ProductContext } from '../../context/ProductContext';
import axios from 'axios';
import { useParams } from 'react-router-dom'; // Import useParams

export const EditProduct = () => {
  const { productId } = useParams(); // Get the product ID from the URL using useParams
  const { register, handleSubmit, formState: { errors }, setValue } = useForm();
  const products = useContext(ProductContext);

  // Find the product by ID
  const productToEdit = products.find(product => product.id === parseInt(productId));

  useEffect(() => {
    // Populate the form fields with the existing product data when the component mounts
    if (productToEdit) {
      setValue('name', productToEdit.name);
      setValue('price', productToEdit.price);
    }
  }, [productToEdit, setValue]);

  const handleFormSubmit = (data) => {
    // Update the product data in your context or API
    // For this example, we'll use axios to send a PUT request to update the product
    axios.put(`http://localhost:2000/products/${productId}`, data)
      .then(response => {
        // Handle the response if needed
        console.log(response);
      })
      .catch(error => {
        // Handle errors if needed
        console.error(error);
      });
  }

  return (
    <div>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <br></br>
        <label>Product Name</label>
        <input type="text" id='name' {...register('name', { required: true, minLength: 3 })} />
        {errors.name && errors.name.type === "required" && <span>Name is required</span>}
        {errors.name && errors.name.type === "minLength" && <span>Minimum 3 characters</span>}
        <br></br>
        <br></br>
        <label>Product Price</label>
        <input type="number" id='price' {...register('price', { required: true })} />
        {errors.price && errors.price.type === "required" && <span>Price is required</span>}
        <br></br>
        <br></br>
        <input type="submit" value="Update Product"></input>
      </form>
    </div>
  )
}
