import React from 'react';
import StarRating from 'react-star-ratings';
import { useSelector } from 'react-redux';

const Rating = () => {
  const { singleProduct } = useSelector((state) => state.products);

  return (
    <div>
      <StarRating
        name="small-rating"
        caption="Rate this component!"
        starDimension="30px"
        totalStars={5}
        rating={singleProduct.rating && singleProduct.rating.rate}
        starRatedColor="rgb(245 209 12)"
      />
    </div>
  );
};

export default Rating;
