import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login(){

const [email,setEmail] = useState("");
const [password,setPassword] = useState("");

const navigate = useNavigate();

const loginUser = async ()=>{

let result = await fetch("http://localhost:5000/users");
result = await result.json();

let user = result.find(
u => u.email === email && u.password === password
)

if(user){

localStorage.setItem("user",JSON.stringify(user));
navigate("/");

}else{

alert("Invalid Credentials");

}

}

return(

<div className="container mt-5">

<h2>Login</h2>

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
onClick={loginUser}
>
Login
</button>

</div>

)

}

export default Login;