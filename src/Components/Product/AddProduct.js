import React,{useContext} from 'react'
import { Form } from 'react-hook-form'
import { useForm } from 'react-hook-form'
import { ProductContext } from '../../context/ProductContext'
//import { useNavigate } from 'react-router-dom'
import axios from 'axios';

export const AddProduct = () => {
    const { register, handleSubmit, formState:{errors}} = useForm();
    const products = useContext(ProductContext);
    //const navigate = useNavigate();
    const handleFormSubmit=(data)=>{console.log(data);
    
    //products.push(data);
    axios.post("http://localhost:2000/products",data);
    //navigate("/");
    }
  return (
    <div> 
        <form onSubmit={handleSubmit(handleFormSubmit)}>
            {/* <label>ProductId</label>
            <input type="number" id='id' {...register('id',{required:true})}/>
            {errors.id && errors.id.type == "required" && <span>Id is required</span>}
            <br></br> */}
            <br></br>
            <label>Product Name</label>
            <input type="text" id='name' {...register('name',{required:true,minLength:3})}/>
            {errors.name && errors.name.type == "required" && <span>Id is required</span>}
            {errors.name && errors.name.type == "minLength" && <span>minimum 3 characters </span>}
            <br></br>
            <br></br>
            <label>Product Price</label>
            <input type="number" id='price' {...register('price',{required:true})}/>
            {errors.price && errors.price.type == "required" && <span>Price is required</span>}
            <br></br>
            <br></br>
            <input type="submit" value="Add Product"></input>

        </form>
    </div>
  )
}
