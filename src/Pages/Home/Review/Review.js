import React from 'react';
import { Card } from 'react-bootstrap';
import Rating from '../Rating/Rating';

const Review = ({ reviewN }) => {

    const { name, email, review, rating } = reviewN;
    return (
        <div className="pb-3">
            <Card className="bg-light shadow-lg pb-3 mb-5 bg-body rounded">
            <Rating rating={rating}></Rating>
            <h3 className="pt-3 fw-bolder">{name}</h3>
            <p className="px-3">{ review.slice(0,200)}...</p>
            <small>{email}</small>
            </Card>
        </div>
    );
};

export default Review;