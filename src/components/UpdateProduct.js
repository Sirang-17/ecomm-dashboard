import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function UpdateProduct(){

const [name,setName] = useState("");
const [price,setPrice] = useState("");
const [category,setCategory] = useState("");
const [company,setCompany] = useState("");

const params = useParams();
const navigate = useNavigate();

useEffect(()=>{
getProductDetails();
},[])

const getProductDetails = async ()=>{

let result = await fetch(`http://localhost:5000/products/${params.id}`);
result = await result.json();

setName(result.name);
setPrice(result.price);
setCategory(result.category);
setCompany(result.company);

}

const updateProduct = async ()=>{

await fetch(`http://localhost:5000/products/${params.id}`,{

method:"PUT",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({name,price,category,company})

})

navigate("/");

}

return(

<div className="container mt-5">

<h2>Update Product</h2>

<input
className="form-control mb-3"
value={name}
onChange={(e)=>setName(e.target.value)}
/>

<input
className="form-control mb-3"
value={price}
onChange={(e)=>setPrice(e.target.value)}
/>

<input
className="form-control mb-3"
value={category}
onChange={(e)=>setCategory(e.target.value)}
/>

<input
className="form-control mb-3"
value={company}
onChange={(e)=>setCompany(e.target.value)}
/>

<button
className="btn btn-success"
onClick={updateProduct}
>
Update Product
</button>

</div>

)

}

export default UpdateProduct;