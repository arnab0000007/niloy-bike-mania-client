import React from 'react';
import { Card } from 'react-bootstrap';

const Review = ({ reviewN }) => {

    const { name, email, review, rating } = reviewN;
    return (
        <div className="pb-3">
            <Card className="bg-light shadow-lg pb-3 mb-5 bg-body rounded">
           
            <h3 className="pt-3 fw-bolder">{name}</h3>
            <small>{email}</small>
            <p className="px-3">{ review.slice(0,200)}</p>
            <p className="px-3 h3 py-3">{rating}</p>
           
            </Card>
        </div>
    );
};

export default Review;