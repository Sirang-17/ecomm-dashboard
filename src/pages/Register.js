import React,{useState} from "react";
import {useNavigate} from "react-router-dom";

const Register = ()=>{

const [name,setName]=useState("");
const [email,setEmail]=useState("");
const [password,setPassword]=useState("");

const navigate = useNavigate();

const handleRegister = async (e)=>{
e.preventDefault();

await fetch("http://localhost:5000/users",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
name,
email,
password
})
})

navigate("/login");
}

return(

<div className="container mt-5">
<h2>Register</h2>

<form onSubmit={handleRegister}>

<input
type="text"
placeholder="Enter Name"
className="form-control mb-3"
onChange={(e)=>setName(e.target.value)}
/>

<input
type="email"
placeholder="Enter Email"
className="form-control mb-3"
onChange={(e)=>setEmail(e.target.value)}
/>

<input
type="password"
placeholder="Enter Password"
className="form-control mb-3"
onChange={(e)=>setPassword(e.target.value)}
/>

<button className="btn btn-success">
Register
</button>

</form>
</div>

)

}

export default Register;