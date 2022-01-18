import React from 'react';
import Product from '../../Component/Product/Product';

const Home = () => {
  return (
    <div>
      <div class="card bg-dark text-white">
        <img src="./shop.jpg" className="card-img" alt="shop" height="500px" />
        <div class="card-img-overlay d-flex flex-column justify-content-center mx-5">
          <h1 class="card-title fw-bolder display-3 ">New Winter collection</h1>
          <h3 class="card-text lead fs-2">Enjoy your shopping</h3>
        </div>
      </div>
      <Product />
    </div>
  );
};

export default Home;
