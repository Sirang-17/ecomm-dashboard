import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {

const [email,setEmail] = useState("");
const [password,setPassword] = useState("");
const navigate = useNavigate();

const handleLogin = async (e)=>{
e.preventDefault();

let result = await fetch("http://localhost:5000/users");
result = await result.json();

let user = result.find(
(u)=> u.email === email && u.password === password
);

if(user){
localStorage.setItem("user",JSON.stringify(user));
navigate("/products");
}else{
alert("Invalid Credentials");
}
}

return (
<div className="container mt-5">
<h2>Login</h2>

<form onSubmit={handleLogin}>

<input
type="email"
placeholder="Enter Email"
className="form-control mb-3"
value={email}
onChange={(e)=>setEmail(e.target.value)}
/>

<input
type="password"
placeholder="Enter Password"
className="form-control mb-3"
value={password}
onChange={(e)=>setPassword(e.target.value)}
/>

<button className="btn btn-primary">
Login
</button>

</form>
</div>
)

}

export default Login;