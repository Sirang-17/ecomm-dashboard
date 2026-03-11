import React,{useState} from "react";

const SearchProduct = ()=>{

const [products,setProducts] = useState([]);

const searchHandle = async (key)=>{

let result = await fetch(
`http://localhost:5000/products?q=${key}`
)

result = await result.json();

setProducts(result);

}

return(

<div className="container mt-5">

<h2>Search Product</h2>

<input
type="text"
placeholder="Search product..."
className="form-control search-box"
onChange={(e)=>searchHandle(e.target.value)}
/>

<table className="table table-bordered">

<thead>
<tr>
<th>ID</th>
<th>Name</th>
<th>Price</th>
<th>Category</th>
<th>Company</th>
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
</tr>
))
}

</tbody>

</table>

</div>

)

}

export default SearchProduct;