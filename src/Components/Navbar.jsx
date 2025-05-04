import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {  FaSignInAlt, FaUserPlus } from 'react-icons/fa';

const Navbar = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/signin');
  };

  return (
    <section className="row">
      <div className="col-md-12">
        <nav className="navbar navbar-expand-md navbar-light bg-light">
          <Link to="/" className="navbar-brand">
            <b>GizmoXchange</b>
          </Link>
          <button
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navbarcollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarcollapse">
            <div className="navbar-nav me-auto">
              {user && <Link to="/userproducts" className="nav-link">My Products</Link>}
              
              
              <Link to="/aboutus" className="nav-link">About Us</Link>
            </div>

            <div className="navbar-nav ms-auto">
              {user ? (
                <>
                  <Link to="/addproduct" className="nav-link">Post</Link>
                  <span className="nav-link disabled">Hello, {user.name || user.username}</span>
                  <button
                    onClick={handleLogout}
                    className="btn btn-outline-danger btn-sm mx-2"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link to="/signup" className="nav-link">
                    <FaSignInAlt className="me-1" />
                    Signup
                  </Link>
                  <Link to="/signin" className="nav-link">
                    <FaUserPlus className="me-1" />
                    Signin
                  </Link>
                 
                </>
              )}
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
