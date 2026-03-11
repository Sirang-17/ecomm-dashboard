import React,{useEffect,useState} from "react";
import {Link} from "react-router-dom";
import Swal from "sweetalert2";
import ReactPaginate from "react-paginate";
import Loader from "../components/Loader";

const ProductList = ()=>{

const [products,setProducts] = useState([]);
const [loading,setLoading] = useState(true);


useEffect(()=>{
getProducts();
},[])

const getProducts = async ()=>{

setLoading(true)

let result = await fetch("http://localhost:5000/products");
result = await result.json();

setProducts(result);

setLoading(false)

}

const deleteProduct = (id)=>{

Swal.fire({
title:"Delete Product?",
text:"You cannot undo this!",
icon:"warning",
showCancelButton:true
}).then(async(result)=>{

if(result.isConfirmed){

await fetch(`http://localhost:5000/products/${id}`,{
method:"DELETE"
})

getProducts()

}

})

}

return(

<div className="container mt-5">

<h2>Product List</h2>

loading ? <Loader/> :

<table className="table table-bordered">

<thead>
<tr>
<th>ID</th>
<th>Name</th>
<th>Price</th>
<th>Category</th>
<th>Company</th>
<th>Actions</th>
</tr>
</thead>

<tbody>


{
products.map((item)=>(
<tr key={item.id}>
<td>{item.id}</td>
<td>{item.name}</td>
<td>{item.price}</td>
<td>{item.category}</td>
<td>{item.company}</td>

<td>

<button
className="btn btn-danger me-2"
onClick={()=>deleteProduct(item.id)}
>
Delete
</button>

<ReactPaginate
previousLabel={"previous"}
nextLabel={"next"}
pageCount={5}
containerClassName={"pagination"}
activeClassName={"active"}
/>

<Link
to={"/update/"+item.id}
className="btn btn-warning"
>
Update
</Link>

<h2 className="mb-4">Product List</h2>

<Link
to="/add-product"
className="btn btn-primary mb-3"
>
Add Product
</Link>

</td>

</tr>
))
}


</tbody>

</table>

</div>

)

}

export default ProductList;