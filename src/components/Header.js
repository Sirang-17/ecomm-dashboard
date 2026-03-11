import React from "react";
import {Link,useNavigate} from "react-router-dom";
import {FaBox,FaPlus,FaSearch,FaSignOutAlt} from "react-icons/fa";

const Header = ()=>{

const navigate = useNavigate();
const auth = localStorage.getItem("user");

const toggleDarkMode = ()=>{
document.body.classList.toggle("dark")
}

const logout = ()=>{
localStorage.clear();
navigate("/login");
}


return(

<nav className="navbar navbar-expand-lg navbar-dark">

<div className="container">

<Link className="navbar-brand" to="/">
ProductDashboard
</Link>

<ul className="navbar-nav ms-auto">

{
auth ?

<>

<li className="nav-item">
<Link className="nav-link" to="/products">
<FaBox/> Products
</Link>
</li>

<li className="nav-item">
<Link className="nav-link" to="/add-product">
<FaPlus/> Add Product
</Link>
</li>

<li className="nav-item">
<button
className="btn btn-secondary ms-2"
onClick={toggleDarkMode}
>
Dark Mode
</button>
</li>

<li className="nav-item">
<Link className="nav-link" to="/search">
<FaSearch/> Search
</Link>
</li>

<li className="nav-item">
<button
className="btn btn-danger ms-3"
onClick={logout}
>
<FaSignOutAlt/> Logout
</button>
</li>

</>

:

<>

<li className="nav-item">
<Link className="nav-link" to="/login">Login</Link>
</li>

<li className="nav-item">
<Link className="nav-link" to="/register">Register</Link>
</li>

</>

}

</ul>

</div>

</nav>

)

}

export default Header;