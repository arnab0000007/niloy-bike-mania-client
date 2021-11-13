import React from 'react';
import ReactStars from "react-rating-stars-component";

const Rating = ({rating}) => {
  console.log(rating);
  return (
    <div className="d-flex align-items-center justify-content-center">
      <ReactStars
              size ={50}
              count={5}
              value={parseInt(rating)}
              activeColor="#ffd700"
              edit = {false}
              isHalf = {true}
     />
    </div>
  );
};

export default Rating;