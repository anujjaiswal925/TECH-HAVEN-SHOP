import React, { useEffect, useState } from 'react';
import { fetchProductsAPI } from '../../ProductSlice';
import { useSelector, useDispatch } from 'react-redux';
import './ApiProducts.css';
import { Link } from 'react-router-dom';
import { addToCart } from '../../CartSlice';

const ApiProducts = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.pro.products);

  // Fetch products on mount
  useEffect(() => {
    dispatch(fetchProductsAPI());
  }, [dispatch]);

  return (
    <div className='apiproductsalldiv'>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 apih2">
            <h2 >POPULAR PRODUCTS </h2>
            <hr />
          </div>
        </div>

        <div className="row">
          {products && products.length > 0 ? (
            products.map((element,index) => (
              <div className="col-lg-3 col-md-4 col-sm-6 col-t-6 col-mp-12" key={element.id}>
                <div className="apicart">
                  <div className="apiimgdiv">
                    <Link to={`/productDetails/${element.id}`}>
                      <img className='apiimg' src={element.image} alt={element.name} />
                    </Link>
                  </div>

                  <div className="apitextdiv">
                    <h2 className="apitexth2">{element.title}</h2>
                    <p className="apip"><strong>Price:- </strong>{element.price} <strong>$</strong></p>
                    <p className='apiviewdetails'> <Link to={`/productDetails/${element.id}`}>View Details</Link> </p>
                    <button className="apibutton" onClick={() => dispatch(addToCart(element))}>Add to Cart</button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No products available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ApiProducts;
