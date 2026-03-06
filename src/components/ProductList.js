import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ProductList(){

const [products,setProducts] = useState([]);

useEffect(()=>{
getProducts();
},[])

const getProducts = async ()=>{

let result = await fetch("http://localhost:5000/products");
result = await result.json();
setProducts(result);

}

const deleteProduct = async (id)=>{

await fetch(`http://localhost:5000/products/${id}`,{
method:"DELETE"
})

getProducts();

}

return(

<div className="container mt-5">

<h2>Product List</h2>

<table className="table">

<thead>
<tr>
<th>ID</th>
<th>Name</th>
<th>Price</th>
<th>Category</th>
<th>Company</th>
<th>Action</th>
</tr>
</thead>

<tbody>

{
products.map((item,i)=>

<tr key={i}>

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

<Link
className="btn btn-primary"
to={"/update/"+item.id}
>
Update
</Link>

</td>

</tr>

)
}

</tbody>

</table>

</div>

)

}

export default ProductList;