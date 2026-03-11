import React,{useState} from "react";
import {useNavigate} from "react-router-dom";

const AddProduct = ()=>{

const [name,setName] = useState("");
const [price,setPrice] = useState("");
const [category,setCategory] = useState("");
const [company,setCompany] = useState("");
const [image,setImage] = useState("");

const navigate = useNavigate();

const addProduct = async ()=>{

await fetch("http://localhost:5000/products",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body: JSON.stringify({
name,
price,
category,
company,
image
})

})

navigate("/products");

}

return(

<div className="container mt-5">
<div className="card p-4">

<h2>Add Product</h2>

<input
type="text"
placeholder="Product Name"
className="form-control mb-3"
onChange={(e)=>setName(e.target.value)}
/>

<input
type="text"
placeholder="Price"
className="form-control mb-3"
onChange={(e)=>setPrice(e.target.value)}
/>

<input
type="text"
placeholder="Category"
className="form-control mb-3"
onChange={(e)=>setCategory(e.target.value)}
/>

<input
type="text"
placeholder="Company"
className="form-control mb-3"
onChange={(e)=>setCompany(e.target.value)}
/>

<input
type="text"
placeholder="Image URL"
className="form-control mb-3"
onChange={(e)=>setImage(e.target.value)}
/>

<button
className="btn btn-primary"
onClick={addProduct}
>
Add Product
</button>

</div>
</div>

)

}

export default AddProduct;