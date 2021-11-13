import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

const Product = ({ product,page }) => {
    const { _id, name, price, description, img } = product;
    return (
        <div className="pb-3">
            <Card className="bg-light shadow-lg pb-3 mb-5 bg-body rounded">
            <img src={img} alt="product" className="img-fluid"/>
            <h3 className="pt-3 fw-bolder">{name}</h3>
            <p className="px-3">{page === 'explore' ? description.slice(0,50) : description.slice(0,100)} ................... And many more</p>
            <p className="px-3 h3 py-3">{price} TK </p>
            <Link to={`/book/${_id}`}>
                <button className="btn btn-warning btn-sm fw-bold text-secondary">Buy Now</button>
            </Link>
            </Card>
        </div>
    );
};

export default Product;