import React from 'react';
import { Spinner } from 'react-bootstrap';
import useProducts from '../../../hooks/useProducts';
import Product from '../Product/Product';
import './Products.css';

const Products = ({length,page}) => {
    const {products} = useProducts();
    if (products.length < 1 ) {
        return <div className="spinner"><Spinner animation="border" variant="danger"/></div>
    }
    return (
        <div className="container">
            <h2 className="fw-bold my-5">Bikes For You</h2>
            <div className={page === 'explore' ? 'explore' : 'product-container'}>
                {
                    products.slice(0,length).map(product => <Product
                        key={product._id}
                        product={product}
                        page={page}
                    ></Product>)
                }
            </div>
        </div>
    );
};

export default Products;