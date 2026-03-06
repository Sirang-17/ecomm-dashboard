import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register(){

const [name,setName] = useState("");
const [email,setEmail] = useState("");
const [password,setPassword] = useState("");

const navigate = useNavigate();

const collectData = async ()=>{

let result = await fetch("http://localhost:5000/users",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({name,email,password})

})

result = await result.json();

localStorage.setItem("user",JSON.stringify(result));

navigate("/");

}

return(

<div className="container mt-5">

<h2>Register</h2>

<input
className="form-control mb-3"
placeholder="Name"
onChange={(e)=>setName(e.target.value)}
/>

<input
className="form-control mb-3"
placeholder="Email"
onChange={(e)=>setEmail(e.target.value)}
/>

<input
className="form-control mb-3"
type="password"
placeholder="Password"
onChange={(e)=>setPassword(e.target.value)}
/>

<button
className="btn btn-primary"
onClick={collectData}
>
Register
</button>

</div>

)

}

export default Register;