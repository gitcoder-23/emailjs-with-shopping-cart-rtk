import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  removeItemToCart,
  addItemToCart,
} from '../../Store/Reducers/cartReducer';
import { Link } from 'react-router-dom';

const Cart = () => {
  //const { singleProduct, allProducts } = useSelector((state) => state.products);
  const cartState = useSelector((state) => state.cart);
  console.log('cartState1111', cartState);
  const dispatch = useDispatch();

  const handleIncrement = (data) => {
    dispatch(addItemToCart(data));
  };
  const handledecrement = (data) => {
    dispatch(removeItemToCart(data));
  };

  return cartState.length >= 1 ? (
    <div>
      {cartState.map((item) => {
        return (
          <>
            <div className="row">
              <div className="col-md-4">
                <img src={item.image} alt="" />
              </div>
              <div className="col-md-4">
                <h3>{item.title}</h3>
                <p className="fw-bolder"> Price: ${item.price}</p>
                <p className="fw-bolder">
                  {item.qty} X {item.price}=$
                  {item.qty * item.price}
                </p>

                <button onClick={() => handleIncrement(item)}>+</button>
                <button className="mx-5" onClick={() => handledecrement(item)}>
                  -
                </button>
              </div>
            </div>
          </>
        );
      })}
    </div>
  ) : (
    <div className="container my-5 py-5">
      <div className="row py-5">
        <h3 className="d-flex justify-content-center">Item not Found</h3>
        <Link to="/">
          <button className="btn btn-dark w-100">Go Home</button>
        </Link>
      </div>
    </div>
  );

  /* return quantity >= 1 ? (
    <div>
      <div className="row">
        <div className="col-md-4">
          <img src={singleProduct.image} alt="" />
        </div>
        <div className="col-md-4">
          <h3>{singleProduct.title}</h3>
          <p className="fw-bolder"> Price: ${singleProduct.price}</p>
          <p className="fw-bolder">
            {quantity} X {singleProduct.price}=$
            {quantity * singleProduct.price}
          </p>
          <button onClick={() => dispatch(addItemToCart(allProducts))}>
            +
          </button>
          <button className="mx-5" onClick={() => dispatch(removeItemToCart())}>
            -
          </button>
        </div>
      </div>
    </div>
  ) : (
    <div className="container my-5 py-5">
      <div className="row py-5">
        <h3 className="d-flex justify-content-center">Item not Found</h3>
        <Link to="/">
          <button className="btn btn-dark w-100">Go Home</button>
        </Link>
      </div>
    </div>
  ); */
};

export default Cart;
