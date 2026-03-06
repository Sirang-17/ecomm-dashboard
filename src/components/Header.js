import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";

function Header() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Fetch logged-in user from localStorage
  useEffect(() => {
    const loggedUser = JSON.parse(localStorage.getItem("user"));
    if (loggedUser) {
      setUser(loggedUser);
    }
  }, []);

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container d-flex justify-content-between align-items-center">

        <Link className="navbar-brand text-white" to="/">
          Ecommerce Dashboard
        </Link>

        <div className="d-flex align-items-center">

          {user ? (
            <div className="dropdown">
              {/* User Name / Email */}
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                id="userMenu"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {user.name}
              </button>

              {/* Dropdown Menu */}
              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="userMenu">
                <li>
                  <Link className="dropdown-item" to="/">
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/add">
                    Add Product
                  </Link>
                </li>
                <li><hr className="dropdown-divider" /></li>
                <li>
                  <button className="dropdown-item text-danger" onClick={logout}>
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <>
              <Link className="btn btn-outline-light me-2" to="/login">
                Login
              </Link>
              <Link className="btn btn-outline-light" to="/register">
                Register
              </Link>
            </>
          )}

        </div>
      </div>
    </nav>
  );
}

export default Header;