import React from "react";

const Dashboard = ()=>{

return(

<div className="dashboard container">

<h1 className="mb-4">
Product Management Dashboard
</h1>

<div className="row">

<div className="col-md-4">

<div className="card p-4">

<h4>Total Products</h4>
<p>Manage all your products easily.</p>

</div>

</div>

<div className="col-md-4">

<div className="card p-4">

<h4>Add Products</h4>
<p>Add new items to your inventory.</p>

</div>

</div>

<div className="col-md-4">

<div className="card p-4">

<h4>Search Products</h4>
<p>Quickly find products using search.</p>

</div>

</div>

</div>

</div>

)

}

export default Dashboard