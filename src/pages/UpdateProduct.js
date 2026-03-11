import React,{useEffect,useState} from "react";
import {useParams,useNavigate} from "react-router-dom";

const UpdateProduct = ()=>{

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

body:JSON.stringify({
name,
price,
category,
company
})

})

navigate("/products")

}

return(

<div className="container mt-5">

<h2>Update Product</h2>

<input
type="text"
value={name}
className="form-control mb-3"
onChange={(e)=>setName(e.target.value)}
/>

<input
type="text"
value={price}
className="form-control mb-3"
onChange={(e)=>setPrice(e.target.value)}
/>

<input
type="text"
value={category}
className="form-control mb-3"
onChange={(e)=>setCategory(e.target.value)}
/>

<input
type="text"
value={company}
className="form-control mb-3"
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