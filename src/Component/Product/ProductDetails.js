import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { singleGetProduct } from '../../Store/Actions/productAction';
import { addItemToCart } from '../../Store/Reducers/cartReducer';
import { Link } from 'react-router-dom';
import ReactImageMagnify from 'react-image-magnify';
import Rating from '../StarRating/StarRating';
import Loader from '../Loader/Loader';

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { singleProduct, isLoading } = useSelector((state) => state.products);
  const { quantity } = useSelector((state) => state.cart);

  //console.log('singleProduct', singleProduct);

  useEffect(() => {
    dispatch(singleGetProduct(id));
  }, []);

  return !isLoading ? (
    <div>
      <div class="card h-600 mb-3">
        <div class="row no-gutters">
          <div class="col-md-4 ">
            <ReactImageMagnify
              {...{
                smallImage: {
                  imageClassName: 'small_image',
                  alt: singleProduct.image,
                  isFluidWidth: false,
                  height: 400,
                  width: 300,
                  src: singleProduct.image,
                },
                largeImage: {
                  src: singleProduct.image,
                  width: 1600,
                  height: 1200,
                },
                enlargedImageContainerDimensions: {
                  width: '220%',
                  height: '120%',
                },
              }}
            />

            {/*  <img
              src={singleProduct.image}
              class="card-img "
              alt={singleProduct.image}
            /> */}
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title lead fs-2 text-uppercase text-black-50">
                {singleProduct.category}
              </h5>
              <p class="card-text">{singleProduct.title}</p>
              <h3 class="card-text fw-bolder">
                Rating:{singleProduct.rating && singleProduct.rating.rate}
                <Rating />
              </h3>

              <h2 class="badge rounded-pill bg-info text-dark ">
                ${singleProduct.price}
              </h2>

              <p class="card-text">{singleProduct.description}...</p>

              <button
                className="btn-cart"
                onClick={() => dispatch(addItemToCart(singleProduct))}
              >
                Add to Cart
              </button>

              <Link to="/cart">
                <button className="btn-go-cart mx-3">Go to Cart</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Loader />
  );
};

export default ProductDetails;
