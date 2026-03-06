import React from "react";

function Dashboard() {

  const user = JSON.parse(localStorage.getItem("user"));

  return (

    <div className="container mt-5">

      <h2>Dashboard</h2>

      <div className="card p-4 mt-3">

        <h4>Welcome {user?.name}</h4>

        <p>
          This is your Ecommerce Admin Dashboard.
          From here you can manage products, add new items,
          update product details, and remove products.
        </p>

      </div>

    </div>

  );
}

export default Dashboard;