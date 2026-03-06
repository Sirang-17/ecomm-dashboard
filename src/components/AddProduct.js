import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddProduct(){

const [name,setName] = useState("");
const [price,setPrice] = useState("");
const [category,setCategory] = useState("");
const [company,setCompany] = useState("");

const navigate = useNavigate();

const addProduct = async ()=>{

await fetch("http://localhost:5000/products",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({name,price,category,company})

})

navigate("/");

}

return(

<div className="container mt-5">

<h2>Add Product</h2>

<input
className="form-control mb-3"
placeholder="Product Name"
onChange={(e)=>setName(e.target.value)}
/>

<input
className="form-control mb-3"
placeholder="Price"
onChange={(e)=>setPrice(e.target.value)}
/>

<input
className="form-control mb-3"
placeholder="Category"
onChange={(e)=>setCategory(e.target.value)}
/>

<input
className="form-control mb-3"
placeholder="Company"
onChange={(e)=>setCompany(e.target.value)}
/>

<button
className="btn btn-success"
onClick={addProduct}
>
Add Product
</button>

</div>

)

}

export default AddProduct;