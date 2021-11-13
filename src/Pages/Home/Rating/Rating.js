import React from 'react';
import ReactStars from "react-rating-stars-component";

const Rating = ({rating}) => {
  return (
    <div className="d-flex align-items-center justify-content-center">
      <ReactStars
              size ={50}
              count={5}
              value={rating}
              a11y ={true} 
              activeColor="#ffd700"
              isHalf = {true}
              edit = {false}
     />
    </div>
  );
};

export default Rating;