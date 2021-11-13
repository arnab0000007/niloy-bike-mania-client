import React from 'react';
import { Spinner } from 'react-bootstrap';
import useProducts from '../../../hooks/useProducts';
import Contact from '../Contact/Contact';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import Header from '../../Shared/Header/Header'
import Reviews from '../Reviews/Reviews';

const Home = () => {
  const {products} = useProducts();
    if (products?.length < 1 ) {
        return <div className="spinner"><Spinner animation="border" variant="danger"/></div>
    }
    return (
        <div >
            <Header></Header>
            <Banner></Banner>
            <Products length={6}></Products>
            <Reviews></Reviews>
            <Contact></Contact>
        </div>
    );
};

export default Home;