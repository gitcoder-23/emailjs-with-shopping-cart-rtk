import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllProducts } from '../../Store/Actions/productAction';
import { Link, useHistory } from 'react-router-dom';
import Loader from '../Loader/Loader';

const Product = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { allProducts, isLoading } = useSelector((state) => state.products);
  //console.log('allProducts', allProducts);

  const [filterData, setFilterData] = useState(allProducts);

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  /**** * filtering the product*********/

  const filteredProduct = (item) => {
    const updatedList = allProducts.filter((cat) => cat.category === item);
    setFilterData(updatedList);
  };

  return !isLoading ? (
    <div>
      <div className="col-12 my-5 py-5">
        <h1 className="text-center fw-bolder display-6">Latest Collection</h1>
        <hr />
      </div>
      <div className="button d-flex justify-content-center mb-5">
        <button
          className="btn btn-outline-dark me-2"
          onClick={() => setFilterData(allProducts)}
        >
          All
        </button>
        <button
          className="btn btn-outline-dark me-2"
          onClick={() => filteredProduct("men's clothing")}
        >
          Mens Clothing
        </button>
        <button
          className="btn btn-outline-dark me-2"
          onClick={() => filteredProduct("women's clothing")}
        >
          Women Clothing
        </button>
        <button
          className="btn btn-outline-dark me-2"
          onClick={() => filteredProduct('jewelery')}
        >
          Jwelery
        </button>
        <button
          className="btn btn-outline-dark"
          onClick={() => filteredProduct('electronics')}
        >
          Electronic
        </button>
      </div>
      <div className="product_container">
        {filterData.map((item) => {
          return (
            <>
              <div className="product_details">
                <div
                  class="card text-center"
                  onClick={() => history.push(`/product/${item.id}`)}
                >
                  <img src={item.image} class="card-img-top" alt="product" />
                  <div class="card-body">
                    <h5 class="card-title">{item.title.substring(0, 20)}</h5>
                    <p class="card-text">${item.price}</p>

                    <Link
                      class="btn btn-info"
                      onClick={() => history.push(`/product/${item.id}`)}
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  ) : (
    <Loader />
  );
};

export default Product;
