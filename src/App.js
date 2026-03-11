import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Header from "./components/Header";
import Protected from "./components/Protected";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import AddProduct from "./pages/AddProduct";
import ProductList from "./pages/ProductList";
import UpdateProduct from "./pages/UpdateProduct";
import SearchProduct from "./pages/SearchProduct";

function App() {

return (

<BrowserRouter>

<Header/>

<Routes>

<Route path="/login" element={<Login/>} />
<Route path="/register" element={<Register/>} />

<Route element={<Protected/>}>

<Route path="/" element={<Dashboard/>} />
<Route path="/products" element={<ProductList/>} />
<Route path="/add-product" element={<AddProduct/>} />
<Route path="/update/:id" element={<UpdateProduct/>} />
<Route path="/search" element={<SearchProduct/>} />

</Route>

</Routes>

</BrowserRouter>

)

}

export default App;