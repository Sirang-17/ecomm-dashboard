import React from "react";
import {Link} from "react-router-dom";
import {FaBox,FaPlus,FaSearch,FaHome} from "react-icons/fa";

const Sidebar = ()=>{

return(

<div className="sidebar">

<h2 className="logo">Admin</h2>

<ul>

<li>
<Link to="/">
<FaHome/> Dashboard
</Link>
</li>

<li>
<Link to="/products">
<FaBox/> Products
</Link>
</li>

<li>
<Link to="/add-product">
<FaPlus/> Add Product
</Link>
</li>

<li>
<Link to="/search">
<FaSearch/> Search
</Link>
</li>

</ul>

</div>

)

}

export default Sidebar