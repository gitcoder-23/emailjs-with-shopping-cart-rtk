import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
  //const { quantity } = useSelector((state) => state.cart);
  const cartState = useSelector((state) => state.cart);
  console.log('cartState', cartState);
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark py-3 shadow-sm">
        <div class="container">
          <a class="navbar-brand fw-bold fs-4">Shop Me</a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/product">
                  Products
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="contact-us">
                  Contact us
                </Link>
              </li>
            </ul>
          </div>
          <div className="mx-2">
            <Link to="/login" className="btn btn-warning">
              <i className="fa fa-sign-in me-1"></i>
              Login
            </Link>
          </div>
          <div className="mx-2">
            <Link className="btn btn-danger" to="/register">
              Register
            </Link>
          </div>
          <div>
            <Link to="/cart" className="btn btn-info btn-ouline-success">
              {cartState.length === '' ? (
                <span>cart</span>
              ) : (
                <span>cart:{cartState.length}</span>
              )}
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
