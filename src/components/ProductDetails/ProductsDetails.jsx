import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../CartSlice';


import './ProductsDetails.css'

const ProductDetails = () => {
    const dispatch = useDispatch()
    const { id } = useParams();
    const product = useSelector((state) =>
        state.pro.products.find((item) => item.id === parseInt(id))
    );

    if (!product) {
        return <div>
            <div className="pderroralldiv">
                <div className='container '>
                    <div className="row">
                        <div className='col-lg-6 col-md-6 col-sm-12 col-t-12 pderrortextdiv '>
                            <p style={{ fontSize: "1.5rem", fontWeight: "700", lineHeight: "2rem" }}>Your <span style={{ color: "#02599d", fontWeight: "600" }}>Tech Haven</span> Product is not here </p>
                            <p style={{ fontSize: "1.2rem" }}>Please Select the product</p>
                            <p style={{ fontSize: "1.2rem" }}>Go Back To <a href="/"><strong style={{ color: '#c9a032fd', fontWeight: "700" }}>Home Page</strong></a>  </p>
                        </div>

                        <div className="col-lg-6 col-md-6 col-sm-12 col-t-12">
                            <div className="pderrorcartdiv">
                                <img src="/emptycartp.webp" alt="img" />
                            </div>
                        </div>

                    </div>
                </div>

            </div>

        </div>;
    }

    return (

        <div className='pdalldiv'>
            <div className="container " >
                <div className="row" >
                    <div className="col-lg-6 col-md-6 col-sm-12 col-t-12  " >
                        <div className='pdimgdiv'>
                            <img className='pdimg' src={product.image} alt={product.title} />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-t-12 ">
                        <div className='pdtextdiv'>
                            <h1 className='pdh1'>{product.title}</h1>
                            <div className='pdstardiv'>
                                <i class="fa-solid fa-star" ></i>
                                <i class="fa-solid fa-star" ></i>
                                <i class="fa-solid fa-star" ></i>
                                <i class="fa-solid fa-star" ></i>
                                <i class="fa-solid fa-star" ></i>
                            </div>
                            <p className='pddescription' ><strong>Description :- </strong> {product.description}</p>
                            <p className='pdprice'> <strong>Price :-</strong>  {product.price} <strong>$</strong></p>
                            <button className="pdbutton" onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
                            <Link to='/checkout' className="pdcheckout" >Check Out</Link>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;