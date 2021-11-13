import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Review from '../Review/Review';
import './Reviews.css';

const Products = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
      axios.get('https://whispering-anchorage-35214.herokuapp.com/reviews')
      .then(res => {
          setReviews(res.data);
       })

  }, [reviews]);
    if (reviews?.length < 1 ) {
        return <div className="spinner"><Spinner animation="border" variant="danger"/></div>
    }
    return (
        <div className="container">
            <h2 className="fw-bold my-5">Reviews From Our Clients</h2>
            <div className="review-container">
                {
                    reviews.map(review => <Review
                        key={review._id}
                        reviewN={review}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Products;