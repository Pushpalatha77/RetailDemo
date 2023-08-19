import logo from './logo.svg';
import './App.css';
import { AddProduct } from './Components/Product/AddProduct';
import { ProductContext } from './context/ProductContext';
import { ProductList } from './Components/Product/ProductList';
import { EditProduct } from './Components/Product/EditProduct';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import { DeleteProduct } from './Components/Product/DeleteProduct';
import {ProductDetails} from './Components/Product/ProductDetails';
import { Login } from './Components/Auth/Login';
import  RegisterForm  from './Components/Auth/RegisterForm';


function App() {
  const products = [
    { id: 1, name: 'TV', price:7000},
    { id: 2, name: 'Tablet', price: 10000 },
    { id: 3, name: 'laptop', price: 8000 },
   
  ];
  return (
    <div className="App">
      <ProductContext.Provider value={products}></ProductContext.Provider>
      <AddProduct/>
    
      <Router>
      <Routes>
        {/* Add a route that includes the productId parameter */}
        {/*<Route path="/edit-product/:productId" component={EditProduct} />*/}
        {/*<Route path="/edit-product/:productId" element={<EditProduct/>}></Route>*/}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/productlist" element={<ProductList/>}></Route>
        <Route path="/edit-product/:productId" element={<DeleteProduct/>}></Route>
        <Route path="/productDetails/:productId" element={<ProductDetails/>}></Route>



















      

        {/* Add other routes here */}
      </Routes>
    </Router>
    </div>
  );
}

export default App;
